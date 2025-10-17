import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import LandingScreen from "../auth/landing.jsx";
import SignupScreen from "../auth/sign-up.jsx";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../auth/sign-in.jsx";
import HomeScreen from "../../pages/HomePage.jsx";
import MenuScreen from "../../pages/Menu.jsx";
import FavoritesScreen from "../../pages/favorites.jsx";
import { useState } from 'react';
import ProfileScreen from "../../pages/profile.jsx"; // fixed

const Stack = createNativeStackNavigator();

export default function TabOneScreen() {
  const [favorites, setFavorites] = useState([]); // fixed — must be inside component
  const [user, setUser] = useState({
    name: 'Ishimwe Nziza',
    email: 'nziza@example.com',
    password: '123456',
  });

  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="Dishes" component={MenuScreen} />
      <Stack.Screen name="favorites" component={FavoritesScreen} />
      <Stack.Screen name="Profile">
        {props => <ProfileScreen {...props} user={user} setUser={setUser} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
