// components/Navbar.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({ navigation }) {
  const [activeTab, setActiveTab] = useState('Home'); // track active tab

  // Helper function to render each nav item
  const renderNavItem = (label, iconName, fixedHome = false, targetScreen = null) => {
    const isActive = activeTab === label;

    return (
      <TouchableOpacity
        onPress={() => {
          // 1️⃣ update active tab state
          setActiveTab(label);
          // 2️⃣ navigate to the page (if targetScreen is provided)
          if (targetScreen) navigation.navigate(targetScreen);
        }}
        style={[styles.navItem, isActive && !fixedHome && styles.activeItem]}
      >
        <Ionicons
          name={iconName}
          size={28}
          color={fixedHome ? '#ff6347' : isActive ? '#ff6347' : '#888'} // Home always red
        />
        <Text style={[styles.navText, (isActive || fixedHome) && styles.activeText]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.navbar}>
      {renderNavItem('Home', 'home', true, 'Home')}
      {renderNavItem('Dishes', 'restaurant', false, 'Dishes')}
      {renderNavItem('Favorites', 'heart-outline', false, 'Favorites')}
      {renderNavItem('Profile', 'person-outline', false, 'Profile')}
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
    backgroundColor: 'rgba(255, 99, 71, 0.1)', // highlight active tab
  },
  navText: { 
    fontSize: 11, 
    color: '#888',
    marginTop: 4,
    fontWeight: '500',
  },
  activeText: {
    color: '#ff6347', // red text for active tab
  },
});
