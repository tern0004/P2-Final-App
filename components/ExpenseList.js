import React from 'react';
import { SafeAreaView, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";


function ExpenseList(props) {

    return (
        <SafeAreaView>

                <FlatList
                    data={ props.expensesData }
                    renderItem={({ item }) => <ExpenseItem price={ item.price } title={ item.title } deleteExpense={props.deleteExpense} id={item.id} imageFile={item.imageFile}/> }
                    keyExtractor={(item) => item.id}
                    extraData={props.deleteExpense}
                />

        </SafeAreaView>
    );
}

export default ExpenseList;