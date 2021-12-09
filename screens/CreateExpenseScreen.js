import React from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';


export default function CreateExpenseScreen({ route }) {

  const [title, onChangeTitle] = useState("")
  const [value, onChangeValue] = useState(null)


  console.log(route.params.id)

    return (
    
    <ScrollView style={styles.container}>
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
  
  });