import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from 'react-native';
import * as React from 'react';

export default function FormRecherche(props) {
    const [text, onChangeText] = React.useState('');

    const handlerChange = (e) =>{
        onChangeText(e);
    }

    const handlePress= () =>{
        props.handler(text)
    }
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={handlerChange}
                value={text}
            />
            <Button
                onPress={handlePress}
                title="Voir"
                color="#841584"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});