import React from 'react';
import { useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, Pressable} from 'react-native';
import { useFonts } from 'expo-font';

function ExpenseItem (props) {

    const navigation = useNavigation();
    const [loaded] = useFonts({
        Verdana: require('../assets/fonts/Verdana.ttf'),
        'Handlee-Regular': require('../assets/fonts/Handlee-Regular.ttf')
    });

    if (!loaded) { return null }

    return (
            <Pressable style={styles.item} onPress={ () => { navigation.navigate('ExpenseDetails') }}>
                <Text style={styles.itemMoney}>${props.price}</Text>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </Pressable>
    )


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
        fontFamily: 'Handlee-Regular',
        color: 'red'
    },
    itemDetails: {
        fontSize: 18,
        fontFamily: 'Handlee-Regular',
        backgroundColor: '#FFF',
    },
    itemTitle: {
        fontSize: 20,
        fontFamily: 'Handlee-Regular'
    }

})

export default ExpenseItem;