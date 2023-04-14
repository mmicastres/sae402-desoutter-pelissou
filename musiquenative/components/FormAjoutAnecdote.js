import * as React from "react";
import { useState, useEffect } from 'react';

import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, Picker } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Anecdotes from '../classes/Anecdotes';
import { UserContext } from '../App';




export default function FormAjoutAnecdote(props) {

    // Instancing all needed variables to create a new Anecdote
    console.log(props);
    let pseudo = `${props.pseudo}`;
    let id_titre = `${props.id}`;

    const [contenu, setContenu] = useState("");

    const HandleChangeContenu = (event) => setContenu(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Anecdotes(contenu, pseudo, id_titre);
        console.log(contenu);
        console.log(pseudo);
        console.log(id_titre);
        props.handlerUtilisateur(data);

    }


    return (
        <View>
            <TextInput
                required
                style ={styles.input}
                id="contenu"
                placeholder="Contenu de l'Anecdote"
                name="contenu"
                value={contenu}
                onChange={HandleChangeContenu}
                onChangeText={setContenu}
            />
            <Button
                title="Valider"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onPress={handleSubmit}
            >
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        color: '#444444',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
    },
    registerButton: {
        backgroundColor: '#333333',
        borderColor: '#333333',
        borderWidth: 2,
        marginLeft: 0,
    },
    buttonText: {
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerButtonText: {
        color: '#FFFFFF',
    },
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    selectplaceholder: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    selectButton: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
    },
    selectButtonSelected: {
        backgroundColor: '#F0FFF0',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10,
    },
    selectButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectButtonTextSelected: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
