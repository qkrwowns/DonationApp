use actix_web::{web, App, HttpServer, HttpResponse, Responder, post};
use serde::{Deserialize};
use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};
use argon2::password_hash::{SaltString, rand_core::OsRng};
use std::collections::HashMap;
use std::sync::Mutex;

#[derive(Debug, Deserialize)]
struct LoginData {
    username: String,
    password: String,
}

// This will store usernames and their corresponding password hashes
struct AppState {
    users: Mutex<HashMap<String, String>>,
}

// Password hashing function
fn hash_password(password: &str) -> String {
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let password_hash = argon2
        .hash_password(password.as_bytes(), &salt)
        .unwrap()
        .to_string();

    password_hash
}

// Password verification function
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

    // Access the shared user store (in-memory for now)
    let mut users = state.users.lock().unwrap();

    // Check if the username already exists
    if users.contains_key(&username) {
        return HttpResponse::BadRequest().body("Username already taken");
    }

    // Store the new user with their hashed password
    users.insert(username, password_hash);

    HttpResponse::Ok().body("Signup successful!")
}

// Login handler
#[post("/login")]
async fn login(data: web::Json<LoginData>, state: web::Data<AppState>) -> impl Responder {
    let username = data.username.clone();
    let password = data.password.clone();

    // Access the shared user store (in-memory)
    let users = state.users.lock().unwrap();

    // Check if the username exists
    if let Some(stored_password_hash) = users.get(&username) {
        if verify_password(stored_password_hash, &password) {
            return HttpResponse::Ok().body("Login successful!");
        } else {
            return HttpResponse::Unauthorized().body("Invalid password");
        }
    } else {
        return HttpResponse::Unauthorized().body("Invalid username");
    }
}

// Main function to start the server
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let users = Mutex::new(HashMap::new()); // In-memory user storage
    let app_state = web::Data::new(AppState { users });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone()) // Share state across requests
            .service(login)
            .service(signup)             // Register the signup route
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
