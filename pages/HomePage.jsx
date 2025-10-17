import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { COLORS } from '@/constants/Colors';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
            <TextInput
              placeholder="Search for dishes..."
              style={styles.searchInput}
              placeholderTextColor="#888"
            />
            <Ionicons name="filter" size={24} color="#007bff" style={styles.filterIcon} />
          </View>
        </View>

        {/* Large Hero Section */}
        <View style={[styles.hero]}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Delicious Meals Delivered To You</Text>
            <View style={styles.emojiContainer}>
              <Image
                source={require("../assets/images/tasty.jpg")}
                style={styles.foodEmoji}
                resizeMode="cover"
              />
              <Image
                source={require("../assets/images/taste1.jpg")}
                style={styles.foodEmoji}
                resizeMode="cover"
              />
              <Image
                source={require("../assets/images/taste2.jpg")}
                style={styles.foodEmoji}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.heroSubtitle}>Fast, fresh, and flavorful right at your door</Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>Explore Menu</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Food Image Section */}
        <View style={styles.foodSection}>
          <Image
            source={require("../assets/images/food.jpg")}
            style={styles.foodImage}
            resizeMode="cover"
          />
          <View style={styles.foodContent}>
            <Text style={styles.foodTitle}>Taste the Best Food in Town!</Text>
            <Text style={styles.foodSubtitle}>Discover amazing flavors from top local chefs</Text>
            <TouchableOpacity style={styles.viewMenuButton}>
              <Text style={styles.viewMenuButtonText}>View Menu</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Top Dishes */}
        <View style={styles.topDishes}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Dishes</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="chevron-forward" size={18} color="#007bff" />
            </TouchableOpacity>
          </View>
          <ScrollView 
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.dishGrid}
>
            <View style={styles.dishCard}>
              <Image
                source={require("../assets/images/taste3.jpg")}
                style={styles.dishImage}
                resizeMode="cover"
              />
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>Burger Delight</Text>
                <Text style={styles.dishPrice}>$12.99</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#ffd700" />
                  <Text style={styles.ratingText}>4.8</Text>
                </View>
              </View>
            </View>
            <View style={styles.dishCard}>
              <Image
                source={require("../assets/images/taste4.jpg")}
                style={styles.dishImage}
                resizeMode="cover"
              />
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>Pizza Supreme</Text>
                <Text style={styles.dishPrice}>$15.99</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#ffd700" />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
              </View>
            </View>
            <View style={styles.dishCard}>
              <Image
                source={require("../assets/images/chicken.jpg")}
                style={styles.dishImage}
                resizeMode="cover"
              />
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>Pasta Love</Text>
                <Text style={styles.dishPrice}>$13.50</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#ffd700" />
                  <Text style={styles.ratingText}>4.7</Text>
                </View>
              </View>
            </View>
            <View style={styles.dishCard}>
              <Image
                source={require("../assets/images/beef.jpg")}
                style={styles.dishImage}
                resizeMode="cover"
              />
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>Salad Fresh</Text>
                <Text style={styles.dishPrice}>$9.99</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#ffd700" />
                  <Text style={styles.ratingText}>4.6</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Additional spacing */}
        {/* <View style={styles.bottomPadding} /> */}
      </ScrollView>

      {/* Navbar */}
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingTop: 50, // For status bar
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,
  },
  filterIcon: {
    marginLeft: 8,
  },
  hero: {
    height: 280,
    backgroundColor: '#ff6347',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    elevation: 12,
    shadowColor: '#ff6347',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    color: '#fff',
    fontSize: Math.min(28, width * 0.04),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: Math.min(34, width * 0.05),
  },
  emojiContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },
  foodEmoji: {
    width: Math.min(70, width * 0.18),
    height: Math.min(70, width * 0.18),
    borderRadius: Math.min(35, width * 0.09),
    marginHorizontal: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  heroSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: Math.min(16, width * 0.025),
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: Math.min(22, width * 0.03),
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
  },
  foodSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  foodImage: { 
    width: Math.min(110, width * 0.25),
    height: Math.min(110, width * 0.25),
    borderRadius: Math.min(55, width * 0.125),
    marginRight: 20,
    borderWidth: 3,
    borderColor: '#ff6347',
  },
  foodContent: {
    flex: 1,
  },
  foodTitle: { 
    fontSize: Math.min(22, width * 0.035),
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 6,
  },
  foodSubtitle: {
    fontSize: Math.min(15, width * 0.025),
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  viewMenuButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  viewMenuButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  topDishes: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: { 
    fontSize: Math.min(24, width * 0.04),
    fontWeight: 'bold', 
    color: '#333',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  dishScrollContent: {
    paddingRight: 20,
  },
  dishGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
},

 dishCard: {
    width: '48%',
    marginBottom:15,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
  },
  dishImage: { 
    width: '100%',
    height: Math.min(110, width * 0.22),
    borderRadius: 15,
    marginBottom: 12,
  },
  dishInfo: {
    alignItems: 'center',
  },
  dishName: {
    fontSize: Math.min(16, width * 0.03),
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: Math.min(18, width * 0.032),
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: Math.min(14, width * 0.025),
    color: '#666',
  },
  bottomPadding: {
    height: 100, // Extra space for navbar overlap
  },
});