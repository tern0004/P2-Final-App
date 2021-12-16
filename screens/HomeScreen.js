import React from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import TotalExpense from "../components/TotalExpense";
import ExpenseList from "../components/ExpenseList";

export default function HomeScreen( { navigation, route, expenses, deleteExpense } ) {


    return (
        <SafeAreaView style={styles.container}>
            <TotalExpense expensesData={expenses} />
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

const styles = StyleSheet.create({
    container: {


    },

});

