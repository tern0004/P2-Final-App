import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function ExpenseItem ( props, navigation) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemMoney}>${props.price}</Text>
            <Text style={styles.itemTitle}>{props.title}</Text>
            <Button style={styles.itemDetails} title='Delete' onPress={() => props.deleteExpense(props.id)}/>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemMoney: {
        fontSize: 24,
        fontFamily: 'Verdana',
        color: 'red'
    },
    itemDetails: {
        backgroundColor: '#FFF',
        fontSize: 18,
        fontFamily: 'Verdana'
    },
    itemTitle: {
        fontSize: 20,
        fontFamily: 'Verdana'
    }

})

export default ExpenseItem;