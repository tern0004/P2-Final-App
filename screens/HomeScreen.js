import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen( { navigation, route, expenses } ) {
    // console.log(navigation)
    // console.log(route)
    console.log(expenses)
    
    return (
    <SafeAreaView style={styles.container}>
        <Text>This is the HomeScreen</Text>
        
        <FlatList
        data={ expenses }
        renderItem={(item) => <Expense expense={item} /> }
        keyExtractor={(item, index) => {
            return item.title+'-'+index
        }}
        />
        <Button title="Create expense" onPress = {() => {
            navigation.navigate('CreateExpense')
        }}
        />
        <StatusBar style="auto" />
    </SafeAreaView>
    )
}

function Expense( {expense} ){
    return (
        <View>
            <Text>{expense.item.title}</Text>
            <Text>{expense.item.price}</Text>
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