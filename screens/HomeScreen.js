import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import ExpenseList from "../components/ExpenseList";
import TotalExpense from "../components/TotalExpense";

function HomeScreen() {
    return (
        <SafeAreaView>
            <TotalExpense/>
            <Text>All Expenses</Text>
            <ScrollView>
                <ExpenseList/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;