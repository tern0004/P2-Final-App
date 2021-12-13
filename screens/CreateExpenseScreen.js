import React from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, ScrollView, SafeAreaView, Button, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
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
          title={"take picture"}
          onPress={() =>  {
            navigation.navigate("CameraScreen", {
              setCameraImage
            })
          }}
          />
          

          <Button
          title = {"submit"}
          onPress = { () => {
            onSubmit()
          }}
          />

          {imageFile && (<Image
            style = {styles.imageView}
            source = {
              {uri: imageFile}
          
            }
            />)}

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
    },
    imageView: {
      height: 300, 
      width: 300
    }
  });

