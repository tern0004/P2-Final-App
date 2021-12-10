import React from 'react';
import { View, Text } from 'react-native';
import ExpenseList from "../components/ExpenseList";

function HomeScreen() {
    return (
        <View>
            <ExpenseList/>
        </View>
    );
}

export default HomeScreen;