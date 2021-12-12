import React from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TotalExpense from "../components/TotalExpense";
import ExpenseList from "../components/ExpenseList";

export default function HomeScreen( { navigation, route, expenses } ) {

    return (
        <SafeAreaView style={styles.container}>
            <TotalExpense/>
            <Text>All Expenses</Text>
            <ExpenseList expensesData={expenses}/>

            <Button title="Create expense" onPress = {() => { navigation.navigate('CreateExpense') }} />
            <StatusBar style="auto" />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {


    },

});

