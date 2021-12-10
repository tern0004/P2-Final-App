import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation, route }) {
    // console.log(navigation)
    // console.log(route)

    
    return (
    <View style={styles.container}>
        <Text>This is the HomeScreen</Text>
        <Button title="Create expense" onPress = {() => {
            navigation.navigate('CreateExpense')
        }}
        />
        <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });