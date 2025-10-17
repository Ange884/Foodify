import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/Navbar';

const dishes = [
  { name: 'Burger Delight', price: '$12.99', image: require('../assets/images/taste3.jpg'), rating: 4.8 },
  { name: 'Pizza Supreme', price: '$15.99', image: require('../assets/images/taste4.jpg'), rating: 4.9 },
  { name: 'Pasta Love', price: '$13.50', image: require('../assets/images/chicken.jpg'), rating: 4.7 },
  { name: 'Salad Fresh', price: '$9.99', image: require('../assets/images/beef.jpg'), rating: 4.6 },
  { name: 'Sushi Roll', price: '$11.99', image: require('../assets/images/tasty.jpg'), rating: 4.9 },
  { name: 'Beef Steak', price: '$17.50', image: require('../assets/images/taste2.jpg'), rating: 4.8 },
  // Add more dishes as needed
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Delicious Menu</Text>
      <ScrollView contentContainerStyle={styles.dishGrid}>
        {dishes.map((dish, index) => (
          <View key={index} style={styles.dishCard}>
            <View style={styles.imageContainer}>
              <Image source={dish.image} style={styles.dishImage} />
            </View>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishPrice}>{dish.price}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#ffd700" />
              <Text style={styles.ratingText}>{dish.rating}</Text>
            </View>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/*Navbar */}
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  dishGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  dishCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0ff',
  },
  imageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
  dishImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dishName: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  dishPrice: { 
    fontSize: 16, 
    color: '#ff6347', 
    fontWeight: '600',
    marginBottom: 8,
  },
  ratingContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#fff3cd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  ratingText: { 
    marginLeft: 5, 
    fontSize: 16, 
    fontWeight: '600',
    color: '#856404',
  },
  orderButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});