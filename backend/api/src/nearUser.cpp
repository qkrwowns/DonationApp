#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

int main(int argc, char* argv[]) {
    // Validate the number of arguments
    if (argc != 3) {
         cerr << "Usage: ./nearUser <reqSubjects> <user_data>" <<  '\n';
        return 1;
    }

     string reqSubjects = argv[1];
     string userData = argv[2];

    // Split the user data into individual rows
     vector< string> users;
     stringstream ss(userData);
     string row;
    while ( getline(ss, row, '\n')) {
        users.push_back(row);
    }

    // Process each user
     cout << "Requested Subjects: " << reqSubjects <<  '\n';
    for (const auto& user : users) {
        // Split "username:subjects" into parts
        size_t pos = user.find(':');
        if (pos !=  string::npos) {
             string username = user.substr(0, pos);
             string subjects = user.substr(pos + 1);

            cout << "User: " << username << ", Subjects: " << subjects <<  '\n';

            // Simulate subject matching logic
            if (subjects.find(reqSubjects) !=  string::npos) {
                cout << "  -> Matches requested subjects!" <<  endl;
            } else {
                cout << "  -> Does not match requested subjects." <<  endl;
            }
        }
    }
}
