import React from 'react';
import { useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, Pressable} from 'react-native';

function ExpenseItem (props) {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.item} onPress={ () => { navigation.navigate('ExpenseDetails') }}>
            <Text style={styles.itemMoney}>${props.price}</Text>
            <Text style={styles.itemTitle}>{props.title}</Text>
        </Pressable>
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