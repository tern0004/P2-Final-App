import React from 'react';
import { View, Text } from 'react-native';
import ExpenseList from "../components/ExpenseList";
import TotalExpense from "../components/TotalExpense";

function HomeScreen() {
    return (
        <View>
            <TotalExpense/>
            <Text>All Expenses</Text>
            <ExpenseList/>
        </View>
    );
}

export default HomeScreen;