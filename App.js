import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen'
import SpacecraftScreen from './SpacecraftScreen';
import DailypicScreen from './DailypicScreen';
import StarMapScreen from './StarMapScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "HomeScreen" screenOptions = {{headerShown:false}}>
    <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
    <Stack.Screen name = "DailypicScreeen" component={DailypicScreen}/>
    <Stack.Screen name = "StarMapScreen" component={StarMapScreen}/>
    <Stack.Screen name = "SpacecraftScreen" component={SpacecraftScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
