use actix_web::{web, App, HttpServer, HttpResponse, Responder, post};
use serde::{Deserialize, Serialize};
use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};
use argon2::password_hash::{SaltString, rand_core::OsRng};
use sqlx::mysql::MySqlPool;
use std::sync::Mutex;
use serde_json::json;
use dotenv::dotenv;
use std::env;

#[derive(Debug, Deserialize, Serialize)]
struct UserData {
    username: String,
    contact: Option<String>,
    region: i32,
    subjects: Option<String>,
    role: bool,
    password: String,
}

#[derive(Debug, Deserialize)]
struct LoginData {
    username: String,
    password: String,
}

struct AppState {
    db_pool: MySqlPool,
}

// Helper function to hash the password
fn hash_password(password: &str) -> String {
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let password_hash = argon2.hash_password(password.as_bytes(), &salt).unwrap().to_string();
    password_hash
}

// Helper function to verify the password
fn verify_password(hash: &str, password: &str) -> bool {
    let parsed_hash = PasswordHash::new(hash).unwrap();
    let argon2 = Argon2::default();
    argon2.verify_password(password.as_bytes(), &parsed_hash).is_ok()
}

// Signup handler
#[post("/signup")]
async fn signup(data: web::Json<LoginData>, state: web::Data<AppState>) -> impl Responder {
    let username = data.username.clone();
    let password = data.password.clone();

    // Hash the password
    let password_hash = hash_password(&password);
    let db_pool = &state.db_pool;

    let existing_user = sqlx::query!("SELECT username FROM user_info WHERE username = ?", username)
        .fetch_optional(db_pool)
        .await
        .expect("Failed to query user");

    if existing_user.is_some() {
        return HttpResponse::BadRequest().body("Username already taken");
    }

    // Insert user with default values for non-null columns
    sqlx::query!(
        "INSERT INTO user_info (username, contact, region, subjects, role, password_hash) 
         VALUES (?, '', 0, '', false, ?)",
        username,
        password_hash
    )
    .execute(db_pool)
    .await
    .expect("Failed to insert user");

    HttpResponse::Ok().body("Signup successful!")
}


// Login handler
#[post("/login")]
async fn login(data: web::Json<LoginData>, state: web::Data<AppState>) -> impl Responder {
    let username = data.username.clone();
    let password = data.password.clone();
    let db_pool = &state.db_pool;

    // Retrieve the user from the database with all fields
    let user = sqlx::query!(
        "SELECT password_hash, contact, region, subjects, role FROM user_info WHERE username = ?",
        username
    )
    .fetch_optional(db_pool)
    .await
    .expect("Failed to query user");

    if let Some(user) = user {
        // Convert password_hash to &str if it exists, or handle the None case
        if let Some(stored_hash) = user.password_hash.as_deref() {
            if verify_password(stored_hash, &password) {
                let response = json!({
                    "message": "Login successful!",
                    "role": user.role,
                    "region": user.region,
                    "contact": user.contact,
                    "subjects": user.subjects,
                });
                return HttpResponse::Ok().json(response);
            } else {
                return HttpResponse::Unauthorized().body("Invalid password");
            }
        } else {
            // Handle the case where password_hash is None (shouldn't happen if data is consistent)
            return HttpResponse::Unauthorized().body("Invalid password");
        }
    } else {
        return HttpResponse::Unauthorized().body("Invalid username");
    }
}

#[post("/update_user")]
async fn update_user(data: web::Json<UserData>, state: web::Data<AppState>) -> impl Responder {
    let username = data.username.clone();
    let contact = data.contact.clone().unwrap_or_else(|| "".to_string());
    let region = data.region;
    let subjects = data.subjects.clone().unwrap_or_else(|| "".to_string());
    let role = data.role;

    let db_pool = &state.db_pool;

    // Update user data in the database
    sqlx::query!(
        "UPDATE user_info SET contact = ?, region = ?, subjects = ?, role = ? WHERE username = ?",
        contact,
        region,
        subjects,
        role,
        username
    )
    .execute(db_pool)
    .await
    .expect("Failed to update user");

    HttpResponse::Ok().body("User information updated successfully!")
}

// Main function to start the server
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();  // Load environment variables from .env
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let db_pool = MySqlPool::connect(&database_url)
        .await
        .expect("Failed to connect to the database");

    // Create the `user_info` table if it doesn't exist
    sqlx::query(
        "CREATE TABLE IF NOT EXISTS user_info (
            username VARCHAR(255) PRIMARY KEY,
            contact VARCHAR(255),
            region INT NOT NULL,
            subjects TEXT,
            role BOOLEAN NOT NULL,
            password_hash TEXT NOT NULL
        )"
    )
    .execute(&db_pool)
    .await
    .expect("Failed to create user_info table");

    let app_state = web::Data::new(AppState { db_pool });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .service(signup)
            .service(login)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
