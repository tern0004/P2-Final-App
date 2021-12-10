import React from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, ScrollView, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';


export default function CreateExpenseScreen( { route, navigation, addExpense }) {


  const [title, onChangeTitle] = useState("")
  const [value, onChangeValue] = useState(null)
  // const [date, setDate] = useState(route.params.id)

  // console.log(route)
  // console.log(route)
  console.log(route)
  console.log(navigation)
  console.log(addExpense)

  // console.log(navigation)



    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <Text>Expense Screen</Text>
          <StatusBar style="auto" />
          <TextInput 
          style={styles.input}
          onChangeText = {onChangeTitle}
          value = {title}
          placeholder= "enter expense name"
          ></TextInput>

          <TextInput 
          style={styles.input}
          onChangeText = {onChangeValue}
          value = {value}
          placeholder= "enter expense value"
          keyboardType = "numeric"
          ></TextInput>
      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20
    }
  });