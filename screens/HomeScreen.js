import React from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import TotalExpense from "../components/TotalExpense";
import ExpenseList from "../components/ExpenseList";

import {useState, useEffect } from 'react'

export default function HomeScreen( { navigation, route, expenses, deleteExpense } ) {

    const [loading, setLoading] = useState(false)

    const startLoading = () => {
        setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    }

    useEffect(() => {
        startLoading()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
            <ActivityIndicator 
            animating={loading}
            size="large"
                style={styles.loadingWheel}
            />
            ):
            (
            <>
            <TotalExpense expensesData={expenses} />
            {expenses.length > 0 ? (
            <>
            <Text style={styles.flastListTitle}>All Expenses</Text>
            <ExpenseList expensesData={expenses} deleteExpense={deleteExpense}/>
            </>
            ) : (
                <Text style={styles.noExpenses}>No Expenses Yet! </Text>
            )
            }   
            <Button title="Create expense" onPress = {() => { navigation.navigate('CreateExpense') }} />
            </>
            )} 
            <StatusBar style="auto" />
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    loadingWheel: {
        flex:1,
        alignSelf: "center",
        
        color:'red',
    },
    flastListTitle: {
        margin: 5
    },
    noExpenses: {
        textAlign: 'center',
        margin: 50,
        fontSize: 20

    }

});

