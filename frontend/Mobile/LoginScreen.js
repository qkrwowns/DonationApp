import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // Dynamic backend URL depending on platform and environment
  const getBackendUrl = () => {
    if (Platform.OS === 'ios') {
      return 'http://192.168.75.126:8080';  // Use localhost for iOS simulator
    } else {
      return 'http://192.168.75.126:8080';   // Use 10.0.2.2 for Android emulator
    }
  };

  const handleLogin = async () => {
    if (!userId || !password) {
      Alert.alert('Error', 'Please fill out both fields');
      return;
    }

    try {
      const response = await fetch(`${getBackendUrl()}/login`, {
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
        Alert.alert('Success', 'Login successful');
        navigation.navigate('Home');  // Navigate to the Home screen on success
      } else {
        const errorMessage = await response.text();
        Alert.alert('Login failed', errorMessage || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server');
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CharityApp!</Text>
      <Text style={styles.userId}>ID</Text>
      <TextInput
        style={styles.idInput}
        placeholder="Enter your User ID"
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.noAccount}>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.signUpText}>Sign Up</Text>
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
    marginBottom: 120,
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
    marginBottom: 49,
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
  noAccount: {
    textAlign: 'center',
    fontSize: 15,
  },
  signUpText: {
    color: '#5D7EA7',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default LoginScreen;
