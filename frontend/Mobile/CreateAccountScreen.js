import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Dynamic backend URL depending on platform and environment
  const getBackendUrl = () => {
    if (Platform.OS === 'ios') {
      return 'http://192.168.75.126:8080';  // Use localhost for iOS simulator
    } else {
      return 'http://192.168.75.126:8080';   // Use 10.0.2.2 for Android emulator
    }
  };

  const handleCreateAccount = async () => {
    if (!userId || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(`${getBackendUrl()}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userId,
          password: password,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');  // Navigate back to the login screen
      } else {
        const errorMessage = await response.text();
        Alert.alert('Error', errorMessage || 'Failed to create account.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server.');
      console.error('Signup error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>alert
      <Text style={styles.userId}>ID</Text>
      <TextInput
        style={styles.idInput}
        placeholder="Enter your user ID"
        placeholderTextColor="#888"
        value={userId}
        onChangeText={setUserId}
      />
      <Text style={styles.password}>Password</Text>
      <TextInput
        style={styles.passwordInput}
        placeholder="Enter your password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.passwordConfirm}>Confirm Passworfd</Text>
      <TextInput
        style={styles.passwordConfirmInput}
        placeholder="Confirm your password"
        placeholderTextColor="#888"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.haveAccount}>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F2F5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 60,
    marginBottom: 90,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Georgia',
  },
  userId: {
    marginBottom: 10,
    marginLeft: 10,
  },
  idInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  password: {
    marginBottom: 10,
    marginLeft: 10,
  },
  passwordInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  passwordConfirm: {
    marginBottom: 10,
    marginLeft: 10,
  },
  passwordConfirmInput: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 50,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#5D7EA7',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 55,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Arial',
  },
  haveAccount: {
    textAlign: 'center',
    fontSize: 15,
  },
  signInText: {
    color: '#5D7EA7',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default CreateAccountScreen;
