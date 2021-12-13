import React from 'react'
import { Text, StyleSheet, TextInput, Keyboard, ScrollView, SafeAreaView, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';


export default function CreateExpenseScreen( { route, navigation, addExpense }) {



    const [title, onChangeTitle] = useState("")
    const [price, onChangePrice] = useState(null)

    const onSubmit = (ev) => {
        let newDate = Date.now()
        addExpense({id: newDate, title, price})
        onChangeTitle("")
        onChangePrice(null)
        // setDate(null)
        navigation.navigate('Home')
    }
    const useCameraImage = () => {
        console.log('Taking Photo')
    }

    const useImageGallery = () => {
      console.log('Picking Image from Gallery')
    }
    const onAddImage = () => {
        Alert.alert('Add  Image','Choose how do you want to add image.', [
            { text: 'Camera', onPress: () => { useCameraImage() } },
            { text: 'Existing Image', onPress: () => { useImageGallery() } }
        ])
    }

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
          />

          <TextInput 
          style={styles.input}
          onChangeText = {onChangePrice}
          value = {price}
          placeholder= "enter expense value"
          keyboardType = "numeric"
          />

          <Button
              title = 'Add Picture'
              onPress = { () => {
                  onAddImage()
              }}
          />
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

