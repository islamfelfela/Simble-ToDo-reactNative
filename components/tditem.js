import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        marginTop: 15,
        borderColor: '#000',
        borderWidth: '1',
        borderStyle: 'solid',
    }
});