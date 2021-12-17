import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Image, Button, Alert, ScrollView} from "react-native";
import { useEffect, useState } from 'react'

function ExpenseDetails({ route, expenses }) {

    
    const {id, price, title, imageFile, expenseDate} = route.params.props
    const [detailItem, setDetailItem] = useState([])


    console.log(route.params.props)

    
    return (
        <ScrollView>
        <Text style={styles.expenseTitle}>Expense Details</Text>
        <SafeAreaView style={styles.itemElement}>
           {/* <Image style={styles.itemImage} source={require('../assets/adaptive-icon.png')}/> */}
           <View style={styles.detailContainer}>
                <Text style={styles.detailDescriptor}>Expense name: </Text>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailDescriptor}>Cost: </Text>
                <Text style={styles.itemPrice}>{price}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailDescriptor}>Date Created: </Text>
                <Text style={styles.itemDate}>{expenseDate}</Text>
            </View>
                
            
            {imageFile && ( 
            <View style={styles.imageContainer}>
                <Text style={styles.detailDescriptor}>Receipt</Text>
                <Image style = {styles.imageView} source = {{uri: imageFile}} /> 
            </View>
            )}
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    itemElement: {
        backgroundColor: '#FFF',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 16,
        // alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 10
        
    },
    expenseTitle: {
        fontSize: 20, 
        marginLeft:10,
        marginTop:20,
        marginBottom: 5
      },
    detailContainer: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        fontFamily: 'Verdana',
        marginBottom: 10
    },
    detailDescriptor: {
        fontSize: 16,
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        marginBottom: 20

    },
    itemImage: {
        width: 128,
        height: 128,
        borderRadius: 16,
    },
    itemTitle: {
        fontSize: 16,
        fontFamily: 'Verdana',
    },
    itemDate: {
        fontSize: 16
    },
    itemPrice: {
        fontSize: 16,
        fontFamily: 'Verdana',
        
    },
    itemDescriptionBoxTxt: {
        fontSize: 16,
        fontFamily: 'Verdana',
        fontWeight: 'normal'
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    imageView: {
        height: 300,
        width: 300
    }

})
export default ExpenseDetails;