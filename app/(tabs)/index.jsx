import { StyleSheet } from 'react-native';
import { Text,View } from 'react-native';
import LandingScreen from "../auth/landing.jsx"
import SignupScreen from "../auth/sign-up.jsx"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../auth/sign-in.jsx"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function TabOneScreen() {
  return (
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
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
