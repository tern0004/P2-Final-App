import React from 'react';
import {Text, SafeAreaView} from "react-native";
import ExpenseItem from "./ExpenseItem";


function ExpenseList() {
    return (
        <SafeAreaView>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>
            <ExpenseItem money={'$300'} title={'Shopping'}/>
            <ExpenseItem money={'$400'} title={'Stuff'}/>
            <ExpenseItem money={'$300'} title={'Books'}/>

        </SafeAreaView>
    );
}

export default ExpenseList;