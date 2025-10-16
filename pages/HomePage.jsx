import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for dishes..."
            style={styles.searchInput}
          />
        </View>

        {/* Large Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroText}>Delicious Meals Delivered To You 🍔🍕</Text>
        </View>

        {/* Food Image Section */}
        <View style={styles.foodSection}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
            style={styles.foodImage}
          />
          <Text style={styles.foodText}>Taste the best food in town!</Text>
        </View>

        {/* Top Dishes */}
        <View style={styles.topDishes}>
          <Text style={styles.sectionTitle}>Top Dishes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
              style={styles.dishImage}
            />
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
              style={styles.dishImage}
            />
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
              style={styles.dishImage}
            />
          </ScrollView>
        </View>
      </ScrollView>

      {/* Navbar */}
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
  hero: {
    height: 200,
    backgroundColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 15,
  },
  heroText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foodSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: '#ffe4e1',
    borderRadius: 15,
  },
  foodImage: { width: 80, height: 80, marginRight: 15 },
  foodText: { fontSize: 16, fontWeight: 'bold', flexShrink: 1 },
  topDishes: {
    padding: 15,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  dishImage: { width: 120, height: 120, borderRadius: 15, marginRight: 10 },
});
