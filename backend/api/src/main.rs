use actix_web::{web, App, HttpServer, HttpResponse, Responder, post};
use serde::{Deserialize, Serialize};
use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};
use argon2::password_hash::{SaltString, rand_core::OsRng};
use std::collections::HashMap;
use std::sync::Mutex;
use std::fs::{OpenOptions, File};
use std::io::{Read, Write};
use serde_json::{json, Value};

#[derive(Debug, Deserialize, Serialize)]
struct UserData {
    username: String,
    password_hash: String,
}

#[derive(Debug, Deserialize)]
struct LoginData {
    username: String,
    password: String,
}

// Shared application state containing user data file path
struct AppState {
    user_data_file: Mutex<String>,  // File path for storing users
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

// Function to load users from file
fn load_users(file_path: &str) -> HashMap<String, String> {
    let mut file = OpenOptions::new()
        .read(true)
        .write(true)
        .create(true)
        .open(file_path)
        .expect("Unable to open or create the file");

    let mut data = String::new();
    file.read_to_string(&mut data).expect("Unable to read file");

    if data.is_empty() {
        HashMap::new()  // Return an empty map if the file is empty
    } else {
        let users: HashMap<String, String> = serde_json::from_str(&data).expect("Invalid JSON format");
        users
    }
}

// Function to save users to file
fn save_users(file_path: &str, users: &HashMap<String, String>) {
    let mut file = OpenOptions::new()
        .write(true)
        .truncate(true)
        .open(file_path)
        .expect("Unable to open the file for writing");

    let json_data = serde_json::to_string(users).expect("Failed to serialize users");
    file.write_all(json_data.as_bytes()).expect("Unable to write to the file");
}

// Signup handler
#[post("/signup")]
async fn signup(data: web::Json<LoginData>, state: web::Data<AppState>) -> impl Responder {
    let username = data.username.clone();
    let password = data.password.clone();

    // Hash the password
    let password_hash = hash_password(&password);

    // Access the file path from state
    let file_path = state.user_data_file.lock().unwrap();

    // Load current users from the file
    let mut users = load_users(&file_path);

    // Check if the username already exists
    if users.contains_key(&username) {
        return HttpResponse::BadRequest().body("Username already taken");
    }

    // Add the new user
    users.insert(username, password_hash);

    // Save the updated user list to the file
    save_users(&file_path, &users);

    HttpResponse::Ok().body("Signup successful!")
}

// Login handler
#[post("/login")]
async fn login(data: web::Json<LoginData>, state: web::Data<AppState>) -> impl Responder {
    let username = data.username.clone();
    let password = data.password.clone();

    // Access the file path from state
    let file_path = state.user_data_file.lock().unwrap();

    // Load users from the file
    let users = load_users(&file_path);

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
    let user_data_file = Mutex::new(String::from("user_data.json"));  // Path to store user data

    let app_state = web::Data::new(AppState { user_data_file });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone()) // Share state across requests
            .service(signup)
            .service(login)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
