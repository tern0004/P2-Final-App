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
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';



export default function CreateExpenseScreen( { route, navigation, addExpense }) {



    const [title, onChangeTitle] = useState("")
    const [price, onChangePrice] = useState(null)
    const [imageFile, onChangeImageFile] = useState(null)

    useEffect(() => {

        console.log(imageFile)

    }, [imageFile])

    const onSubmit = (ev) => {
        let newDate = Date.now()
        addExpense({id: newDate, title, price, imageFile})
        onChangeTitle("")
        onChangePrice(null)
        onChangeImageFile(null)
        // setDate(null)
        navigation.navigate('Home')
    }

    const setCameraImage = (data) => {

        onChangeImageFile(data)
    }

    const useCameraImage = () => {
        navigation.navigate('CameraScreen', { setCameraImage })
    }

    const useImageGallery = async () => {

      let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(permission.granted === false) { return }

      let picker = await ImagePicker.launchImageLibraryAsync()
      console.log(picker)
    }
    const onAddImage = () => {
        Alert.alert('Add  Image','Choose how do you want to add image.', [
            { text: 'Camera', onPress: () => { useCameraImage() } },
            { text: 'Existing Image', onPress: () => { useImageGallery() } }
        ])

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
                  onAddImage()
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

