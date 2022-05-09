import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens';
import Tabs from './Tabs';

export default function App() {
  const [name, setName] = useState(null);

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      {name ? <Tabs /> : <LoginScreen name={name} setName={setName} />}
    </NavigationContainer>
  );
}
