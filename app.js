import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabOneScreen from './app/tabs/index'; // your main tab / stack screen

export default function App() {
  return (
    <NavigationContainer>
      <TabOneScreen />
    </NavigationContainer>
  );
}
