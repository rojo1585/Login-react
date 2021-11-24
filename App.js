import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator()

import Login from './screens/Login';
import Home from './screens/Home';

function MyStack(){
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login"component={Login}/>
    <Stack.Screen name="Home"component={Home}/>
  </Stack.Navigator>

  )
  
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
