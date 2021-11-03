import React, {useLayoutEffect, useState} from 'react'
import {Button, Input} from 'react-native-elements';
import { View, Text } from 'react-native'
import styles from './styles';


const AddChatScreen = ({navigation}) => {

    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle: 'Chats',
        });
    }, [navigation])


    return (
        <View style={styles.container}>
            <Input
                placeholder= 'Enter a chat name'
                value={input}
                onChangeText={(text) => setInput(text)}
                

            />
        </View>
    )
};

export default AddChatScreen;
