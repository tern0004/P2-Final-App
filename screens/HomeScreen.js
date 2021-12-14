import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TotalExpense from "../components/TotalExpense";
import ExpenseList from "../components/ExpenseList";

export default function HomeScreen( { navigation, route, expenses, deleteExpense } ) {

    //console.log(expenses)

    return (
        <SafeAreaView style={styles.container}>
            <TotalExpense/>
            <Text>All Expenses</Text>
            <ExpenseList expensesData={expenses} deleteExpense={deleteExpense}/>

            <Button title="Create expense" onPress = {() => {
                navigation.navigate('CreateExpense')
            }}
            />
            <Button title="Debug Button" onPress = {() => {
                navigation.navigate('ExpenseDetails')
            }}
            />
            <StatusBar style="auto" />
        </SafeAreaView>

    )
}

function Expense( {expense} ){
    return (
        <View>
            <Text>{expense.item.title}</Text>
            <Text>{expense.item.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {


    },

});

