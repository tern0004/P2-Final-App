import React from 'react';
import {Text, View, StyleSheet} from "react-native";

function TotalExpense(props) {
    return (
        <View style={styles.totalItem}>
            <Text style={styles.totalItemTxt}>$1500</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    totalItem: {
        backgroundColor: '#FFF',
        padding: 64,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    totalItemTxt: {
        fontFamily: 'Verdana',
        fontSize: 32
    }

})

export default TotalExpense;