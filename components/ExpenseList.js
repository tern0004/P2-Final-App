import React from 'react';
import {Text, SafeAreaView, FlatList} from "react-native";
import ExpenseItem from "./ExpenseItem";


function ExpenseList(props) {

        console.log(props.expensesData)
    return (
        <SafeAreaView>

                <FlatList
                    data={ props.expensesData }
                    renderItem={({ item }) => <ExpenseItem price={ item.price } title={ item.title } /> }
                    keyExtractor={(item) => item.id}
                />

                {/*
                        <ExpenseItem money={'$300'} title={'Shopping'}/>
                        <ExpenseItem money={'$400'} title={'Stuff'}/>
                         <ExpenseItem money={'$300'} title={'Books'}/>
                */}

        </SafeAreaView>
    );
}

export default ExpenseList;