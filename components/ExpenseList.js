import React from 'react';
import { SafeAreaView, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";


function ExpenseList(props) {

    return (
        <SafeAreaView>

                <FlatList
                    data={ props.expensesData }
                    renderItem={({ item }) => <ExpenseItem price={ item.price } title={ item.title } /> }
                    keyExtractor={(item) => item.id}
                />

        </SafeAreaView>
    );
}

export default ExpenseList;