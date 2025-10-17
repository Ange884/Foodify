import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/Navbar';
import { navigate } from 'expo-router/build/global-state/routing';

const dishes = [
  { name: 'Burger Delight', price: '$12.99', image: require('../assets/images/taste3.jpg'), rating: 4.8 },
  { name: 'Pizza Supreme', price: '$15.99', image: require('../assets/images/taste4.jpg'), rating: 4.9 },
  { name: 'Pasta Love', price: '$13.50', image: require('../assets/images/chicken.jpg'), rating: 4.7 },
  { name: 'Salad Fresh', price: '$9.99', image: require('../assets/images/beef.jpg'), rating: 4.6 },
  { name: 'Sushi Roll', price: '$11.99', image: require('../assets/images/taste2.jpg'), rating: 4.9 },
  { name: 'Beef Steak', price: '$17.50', image: require('../assets/images/taste1.jpg'), rating: 4.8 },
];


export default function MenuScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Delicious Menu</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#ff6347" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for dishes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Ionicons name="close" size={20} color="#ff6347" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.dishGrid}>
        {filteredDishes.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={64} color="#ff6347" />
            <Text style={styles.emptyText}>No dishes found.</Text>
            <Text style={styles.emptySubtext}>Try searching for something else.</Text>
          </View>
        ) : (
          filteredDishes.map((dish, index) => (
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
          ))
        )}
      </ScrollView>
      {/*Navbar */}
      <Navbar navigation={navigation}/>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 12,
  },
  clearButton: {
    padding: 5,
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
    borderColor: '#cac7c7ff',
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
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});