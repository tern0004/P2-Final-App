import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateExpenseScreen from './screens/CreateExpenseScreen'
import { useState, useEfect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExpenseDetails from "./screens/ExpenseDetails";

const Stack = createStackNavigator()

export default function App() {
    const [expenses, setExpenses] = useState([{id: 0, title: "McDonalds", price: 9.99}, {id: 1, title: "Shopping", price: 300}, {id: 2, title: "Books", price: 250}])

    const addExpense = (item) => {
        setExpenses([...expenses, item])
    }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name = 'Home' >
                    {(props) => <HomeScreen { ...props } expenses = {expenses}/>}
                </Stack.Screen>
                <Stack.Screen name = 'CreateExpense'  >
                    {(props) => <CreateExpenseScreen {...props} addExpense = {addExpense} expenses = {expenses} />}
                </Stack.Screen>
                <Stack.Screen name='ExpenseDetails' component={ExpenseDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
