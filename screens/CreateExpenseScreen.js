import React from 'react'
import { useState, useEffect } from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    ScrollView,
    SafeAreaView,
    Button,
    Alert,
    Image, 
    KeyboardAvoidingView,
    Platform,
    View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AutoFocus } from 'expo-camera/build/Camera.types';




export default function CreateExpenseScreen( { route, navigation, addExpense }) {



    const [title, onChangeTitle] = useState(null)
    const [price, onChangePrice] = useState(null)
    const [imageFile, onChangeImageFile] = useState(null)

    useEffect(() => {

        console.log(imageFile)

    }, [imageFile])

    const onSubmit = (ev) => {

        if (title != null && price != null && price > 0) {

            let newDate = Date.now()
            let newDateString = new Date()
            let formattedDate = newDateString.toLocaleDateString()
            let formattedTime = newDateString.toLocaleTimeString()
            let completedDateString = formattedDate + " " + formattedTime

            addExpense({id: newDate, title, price, imageFile, expenseDate: completedDateString})

            // setDate(null)
            navigation.navigate('Home')

            onChangeTitle("")
            onChangePrice(null)
            onChangeImageFile(null)

        } else { Alert.alert('Error', 'Required Fields not filled',[{ text: 'OK', onPress: ()=> { console.log('Closed') } }]) }
        
        

    }

    const setCameraImage = (data) => {

        onChangeImageFile(data)
    }

    const useCameraImage = () => {
        navigation.navigate('CameraScreen', { setCameraImage })
    }


    return (

    

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.expenseTitle}>Create New Expense</Text>

        <View style={styles.inputContainer}>
          <StatusBar style="auto" />
          
          <TextInput 
          style={styles.input}
          onSubmitEditing={Keyboard.dismiss}
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
          onSubmitEditing={Keyboard.dismiss}
          />
          {imageFile && ( <Image style = {styles.imageView} source = {{uri: imageFile}} /> )}
        </View>
        <View style={styles.buttonContainer}>
          <Button
          title = {"Submit Expense"}
          onPress = { () => {
            onSubmit()
          }}
          />
          <Button
              title = 'Add Receipt'
              onPress = { () => {
                  useCameraImage()
              }}
          />

          </View>
          

      </ScrollView>
    </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      height: 40,
      marginHorizontal: 12,
      marginVertical: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius: 4
    },
    scrollView: {
      margin: 10,
      
    },
    imageView: {
        height: 425,
        width: 350,
        alignSelf: 'center',
        marginVertical: 40,
        
    },
    inputContainer: {
      backgroundColor: '#FFF',
      paddingHorizontal: 10,
      padding: 40,
      margin: 5,
      borderRadius: 16
      
    },
    expenseTitle: {
      fontSize: 20, 
      marginLeft:10,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  });

