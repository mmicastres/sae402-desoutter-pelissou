import * as React from "react";
import { useState, useEffect } from 'react';

import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Utilisateurs from '../classes/Utilisateurs';


export default function FormAjoutAlbum(props) {

    console.log(props.pseudo)

    // Importing all the categories and fetching them all to use them later

    const url =
        `https://sae301.alwaysdata.net/api/utilisateurs/${props.pseudo}`;

    const [lutilisateur, setUtilisateur] = useState([])

    function getUtilisateurs() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setUtilisateur(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUtilisateurs()
    }, [])

    // Instancing all needed variables to create a new Album

    const [mdp, setMdp] = useState(`${lutilisateur.mdp}`);
    const [pp, setPp] = useState(`${lutilisateur.pp}`);

    useEffect(() => {
        setMdp(lutilisateur.mdp || ''); // Update mdp
        setPp(lutilisateur.pp || ''); // Update pp
    }, [lutilisateur]);

    const HandleChangeMdp = (event) => setMdp(event.target.value);
    const HandleChangePp = (event) => setPp(event.target.value);
    // const handleChangeCategorie = (event) => setCategorie(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Utilisateurs(null, null, mdp, null, pp);
        props.handler(data);
    }


    return (
        <View>
            <TextInput
            style={styles.input}
                fullWidth
                id="mdp"
                name="mdp"
                placeholder="Mettre a jour votre mot de passe"
                value={mdp}
                onChange={HandleChangeMdp}
            />
            <TextInput
            
                fullWidth
                id="pp"
                name="pp"
                placeholder="Changer votre photo de profil"
                value={pp}
                onChange={HandleChangePp}
            />
            <Button
                type="button"
                fullWidth
                title="Valider la modification"
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
    label:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
    },
});
