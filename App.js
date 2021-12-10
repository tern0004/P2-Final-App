import React from 'react';
import { useState, useEfect } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ExpenseDetails from "./screens/ExpenseDetails";


const Stack = createStackNavigator()

export default function App() {
  const [expenses, setExpenses] = useState([])
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "ExpenseDetails" component={ExpenseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
