import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/Colors.js'; // You'll need to install react-native-vector-icons for icons
import HomeScreen from '@/pages/HomePage.jsx';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) return Alert.alert('Error', 'Please fill in all fields');
    Alert.alert('Success', `Logged in as ${email}`);
  };

  const handleGoogleSignIn = () => {
    // Mock implementation - integrate with @react-native-google-signin/google-signin for real auth
    Alert.alert('Google Sign In', 'Google sign in tapped!');
  };

  const handleAppleSignIn = () => {
    // Mock implementation - integrate with react-native-apple-authentication for real auth
    Alert.alert('Apple Sign In', 'Apple sign in tapped!');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back !</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Icon name="email" size={20} color="#ff6347" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={20} color="#ff6347" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity 
        style={styles.button} onPress= {()=>{
                 {handleLogin}
                 navigation.navigate("home")
        }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Or sign in with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={[styles.socialButton]} onPress={handleGoogleSignIn}>
              <Icon name="login" size={20} color="#fff" style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton]} onPress={handleAppleSignIn}>
              <Icon name="apple" size={20} color="#fff" style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
         <Text style={styles.link}>
            Don't have an account? Sign up
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: { 
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    backgroundColor: '#fafafa',
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: { 
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 14,
  },
  button: { 
    backgroundColor: '#ff6347',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    marginVertical: 15,
    color: '#666',
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
  },
  appleButton: {
    backgroundColor: '#000',
  },
  socialIcon: {
    marginRight: 8,
  },
  socialButtonText: { 
    color: '#fff', 
    fontSize: 16,
    fontWeight: '500',
  },
  link: { 
    color: '#cf501599',
    fontWeight:600,
    marginTop: 10, 
    textAlign: 'center',
    fontSize: 16,
  },
});