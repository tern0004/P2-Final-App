import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ExpenseList from "../components/ExpenseList";
import TotalExpense from "../components/TotalExpense";

function HomeScreen() {
    return (
        <View>
            <TotalExpense/>
            <Text>All Expenses</Text>
            <ScrollView>
                <ExpenseList/>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;