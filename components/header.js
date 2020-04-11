import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 50,
        width: 140,
        paddingTop: 15,
        paddingLeft: 15,
        backgroundColor: '#ccc',
        position: 'flex'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});