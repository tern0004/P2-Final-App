import React from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, ScrollView, SafeAreaView, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';


export default function CreateExpenseScreen( { route, navigation, addExpense }) {


  const [title, onChangeTitle] = useState("")
  const [price, onChangePrice] = useState(null)
  // const [date, setDate] = useState(null)
  // const [date, setDate] = useState(route.params.id)

  // console.log(route)
  // console.log(route)
  // console.log(navigation)
  // console.log(addExpense)

  const onSubmit = (ev) => {
    let newDate = Date.now()
    addExpense({id: newDate, title, price})
    onChangeTitle("")
    onChangePrice(null)
    // setDate(null)
    navigation.navigate('Home')
  }

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
          onChangeText = {onChangePrice}
          value = {price}
          placeholder= "enter expense value"
          keyboardType = "numeric"
          ></TextInput>

          <Button
          title = {"submit"}
          onPress = { () => {
            onSubmit()
          }}
          />

          

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