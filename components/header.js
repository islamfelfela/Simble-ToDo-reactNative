import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 50,
        paddingTop: 15,
        paddingLeft: 15,
        position: 'flex'
    },
    title: {
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    }
});