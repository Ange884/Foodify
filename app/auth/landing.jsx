import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/Colors.js';

export default function LandingScreen({ navigation }) {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <View style={{backgroundColor:COLORS.background}}>
    <View style={[styles.container]}>
      <Image
  source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGZvb2QlMjByZXN0YXVyYW50fGVufDB8fHx8MTY5NzYyODk0OQ&ixlib=rb-4.0.3&q=80&w=400' }}
  style={styles.image}
/>

      <Text style={styles.title}>Welcome to MyApp!!</Text>
      <Text style={styles.subtitle}>Join us and explore amazing features!</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:COLORS.primary}]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor:COLORS.primary}]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height:900
  },
  image: {
    width: 280,
    height: 200,
    marginBottom: 30,
    borderRadius:20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#007bff',
  },
  signupButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
