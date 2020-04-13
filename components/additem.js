import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Insert New"
                onChangeText={(val) => changeHandler(val)}
            />
            <Button
                onPress={() => submitHandler(text)} title='Add' color='#ccc'
            />


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#2c2c2c'
    }
})
