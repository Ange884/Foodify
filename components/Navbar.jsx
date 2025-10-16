// components/Navbar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.navItem, styles.activeItem]}>
        <Ionicons name="home" size={28} color="#ff6347" />
        <Text style={[styles.navText, styles.activeText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dishes')} style={styles.navItem}>
        <Ionicons name="restaurant" size={28} color="#888" />
        <Text style={styles.navText}>Dishes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.navItem}>
        <Ionicons name="heart-outline" size={28} color="#888" />
        <Text style={styles.navText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
        <Ionicons name="person-outline" size={28} color="#888" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: { 
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 4,
  },
  activeItem: {
    backgroundColor: 'rgba(255, 99, 71, 0.1)',
  },
  navText: { 
    fontSize: 11, 
    color: '#888',
    marginTop: 4,
    fontWeight: '500',
  },
  activeText: {
    color: '#ff6347',
  },
});