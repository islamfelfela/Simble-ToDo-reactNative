import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Icon, Fab } from 'react-native';

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add New Task"
                onChangeText={(val) => changeHandler(val)}
            />
            <Button
                onPress={() => submitHandler(text)} title='Add Task' color='coral'
            // onPress={() => submitHandler(text)}
            // direction="up"
            // containerStyle={{}}
            // style={{ backgroundColor: 'coral' }}
            // position="bottomRight"
            />


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 0.1,
        borderBottomColor: '#ddd'
    }
})
