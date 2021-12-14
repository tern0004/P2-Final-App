import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateExpenseScreen from './screens/CreateExpenseScreen'
import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CameraScreen  from './screens/CameraScreen'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import ExpenseDetails from "./screens/ExpenseDetails";


const Stack = createStackNavigator()

export default function App() {

    const [expenses, setExpenses] = useState([{id: 0, title: "McDonalds", price: 9.99}, {id: 1, title: "Shopping", price: 300}, {id: 2, title: "Books", price: 250}])
    const { getItem, setItem } = useAsyncStorage('ExpenseApp');

    const readItemFromStorage = () => {
      getItem()
        .then((item) => {
          //get the value from AsyncStorage and save it in `value`
          item = item === null ? [] : JSON.parse(item);
          setExpenses(item);
        })
        .catch(console.log);
    };


    const addExpense = (item) => {
        setExpenses([...expenses, item])

        setItem(JSON.stringify([...expenses, item]))
      .then(() => {
        console.log('saved new value in array');
      })
      .catch(console.log);
    //item in AsyncStorage is a String representation of the Array
    }

    const deleteExpense = (id) => {
      let filteredExpense = expenses.filter((item) => item.id !== id)
      setExpenses(filteredExpense)
      setItem(JSON.stringify(filteredExpense))
    }

    useEffect(() => {
      readItemFromStorage();
    }, []);
  



    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name = 'Home' >
                    {(props) => <HomeScreen { ...props } expenses = {expenses} deleteExpense={deleteExpense}/>}
                </Stack.Screen>
                <Stack.Screen name = 'CreateExpense'  >
                    {(props) => <CreateExpenseScreen {...props} addExpense = {addExpense}  expenses = {expenses} />}
                </Stack.Screen>
                <Stack.Screen name='ExpenseDetails' component={ExpenseDetails} />
                <Stack.Screen name = "CameraScreen" >
                  {(props) => <CameraScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}