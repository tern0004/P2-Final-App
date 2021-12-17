import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image, Button, Alert, ScrollView} from "react-native";
import { useEffect, useState } from 'react'

function ExpenseDetails({ route, expenses }) {

    
    const {id, price, title, imageFile} = route.params.props
    const [detailItem, setDetailItem] = useState([])


    

    function deleteExpense( ) {
        console.log(route.params.props)
    }
    return (
        <ScrollView>
        <SafeAreaView style={styles.itemElement}>
           <Image style={styles.itemImage} source={require('../assets/adaptive-icon.png')}/>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemDescription}>{price}</Text>
            <View style={styles.itemDescriptionBox}>
                <Text style={styles.itemDescriptionBoxTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
            <View>
                <Button title='Delete' onPress={() => { deleteExpense() }} />
                <Button title='Edit' onPress={() => { console.log('Go to Edit screen!!!')}}/>
            </View>
            {imageFile && ( <Image style = {styles.imageView} source = {{uri: imageFile}} /> )}
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    itemElement: {
        backgroundColor: '#FFF',
        padding: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    itemImage: {
        width: 128,
        height: 128,
        borderRadius: 16,
    },
    itemTitle: {
        fontSize: 20,
        fontFamily: 'Verdana',
        fontWeight: 'bold'
    },
    itemDescription: {
        fontSize: 20,
        fontFamily: 'Verdana',
        fontWeight: 'bold'
    },
    itemDescriptionBox: {
        backgroundColor: '#FFF',
        padding: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    itemDescriptionBoxTxt: {
        fontSize: 16,
        fontFamily: 'Verdana',
        fontWeight: 'normal'
    },
    imageView: {
        height: 300,
        width: 300
    }

})
export default ExpenseDetails;