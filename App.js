import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateExpenseScreen from './screens/CreateExpenseScreen'
import { useState, useEfect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()

export default function App() {
  const [expenses, setExpenses] = useState([{id: 1, title: "McDonalds", price: 9.99}])

  const addExpense = (item) => {
    setExpenses([...expenses, item])
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" >
          {(props) => <HomeScreen { ...props } expenses = {expenses}/>}
        </Stack.Screen>
        <Stack.Screen name = "CreateExpense"  >
          {(props) => <CreateExpenseScreen {...props} addExpense = {addExpense} expenses = {expenses} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// navigation.navigate(Screen, params) - will not reload the current screen
// navigation.push(Screen, params) - Always loads, Adds to the history array (PushState)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
