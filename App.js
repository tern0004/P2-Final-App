import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateExpenseScreen from './screens/CreateExpenseScreen'
import { useState, useEfect } from 'react';


const Stack = createStackNavigator()

export default function App() {
  const [expenses, setExpenses] = useState([])
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} 
        options={{
          title: "Welcome to our expense app"
        }}/>
        <Stack.Screen name = "CreateExpense" component={CreateExpenseScreen} />
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
