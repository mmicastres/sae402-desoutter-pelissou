import * as React from "react";
import { useState, useEffect } from 'react';

import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, Picker } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Albums from '../classes/Albums';
import { UserContext } from '../App';



export default function FormInscription(props) {
    let value = React.useContext(UserContext);

    const [lCategorie, setCategories] = useState([])
    const url =
        `https://sae301.alwaysdata.net/api/categories`;

    function getCategories() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setCategories(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getCategories()
    }, [])


    const date = new Date();
    let date_ajout = date.toJSON().slice(0, 10);
    let pseudo = value.pseudo;

    const [titre, setTitre] = useState("");
    const [sortie_album, setSortie_album] = useState("");
    const [pochette, setPochette] = useState("");
    const [nom_categorie, setCategorie] = useState("Pop");


    const HandleChangeTitre = (event) => setTitre(event.target.value);
    const HandleChangeSortie_album = (event) => setSortie_album(event.target.value);
    const HandleChangePochette = (event) => setPochette(event.target.value);
    // function handleChangeCategorie (event){
    //     setCategorie(event.target.value);
    // }



    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Albums(titre, date_ajout, sortie_album, pochette, nom_categorie, pseudo);
        console.log(data);
        props.handlerUtilisateur(data);
    }



    return (
        <View>
            <TextInput
                style={styles.input}
                required
                fullWidth
                id="titre"
                placeholder="Titre"
                name="titre"
                autoComplete="family-name"
                onChange={HandleChangeTitre}
            />
            <TextInput
                style={styles.input}
                required
                fullWidth
                id="sortie_album"
                placeholder="Date de sortie de l'album"
                name="sortie_album"
                type="date"
                autoComplete="esortie_album"
                onChange={HandleChangeSortie_album}
                onChangeText={setSortie_album}
            />

            <TextInput
                style={styles.input}
                fullWidth
                name="pochette"
                placeholder="Pochette de l'Album"
                type="text"
                id="pochette"
                onChange={HandleChangePochette}
                onChangeText={setPochette}
            />

            <Picker
                        selectedValue={nom_categorie}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >   
                        {lCategorie.map((c) =>
                            <Picker.Item value={nom_categorie} label={c.nom_categorie}>/</Picker.Item>
                        )}

                    </Picker>


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
