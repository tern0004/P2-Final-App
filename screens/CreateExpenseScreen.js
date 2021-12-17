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
    Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';




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
            addExpense({id: newDate, title, price, imageFile})

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
          <Text>Expense Screen</Text>
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

          <Button
              title = 'Add Picture'
              onPress = { () => {
                  useCameraImage()
              }}
          />

          <Button
          title = {"submit"}
          onPress = { () => {
            onSubmit()
          }}
          />
          
          {imageFile && ( <Image style = {styles.imageView} source = {{uri: imageFile}} /> )}

      </ScrollView>
    </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {

      flex: 1,
      backgroundColor: '#fff',
      
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
    },
    imageView: {

        height: 300,
        width: 300

    }
  });

