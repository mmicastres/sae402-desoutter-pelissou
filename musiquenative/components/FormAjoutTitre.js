import * as React from "react";
import { useState, useEffect } from 'react';

import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, Picker } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Titres from '../classes/Titres';
import { UserContext } from '../App';



export default function FormAjoutTitre(props) {

    let pseudo = `${props.pseudo}`;
    let id_album = `${props.id}`;
    let pochette = `${props.pochette}`;


    const [titre, setTitre] = useState("");
    const [paroles, setParoles] = useState("");


    const HandleChangeTitre = (event) => setTitre(event.target.value);
    const HandleChangeParoles = (event) => setParoles(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Titres(titre, pochette,paroles, pseudo, id_album);
        props.handlerUtilisateur(data);

    }






    return (
        <View>
            <TextInput
                required
                style ={styles.input}
                fullWidth
                id="titre"
                placeholder="Titre"
                name="titre"
                autoComplete="family-name"
                value={titre}
                onChange={HandleChangeTitre}
                onChangeText={setTitre}
            />
            <TextInput
                style ={styles.input}
                fullWidth
                id="paroles"
                placeholder="Paroles du titre"
                name="paroles"
                onChange={HandleChangeParoles}
                onChangeText={setParoles}
            />
            <Button
                fullWidth
                variant="contained"
                title="Valider"
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
