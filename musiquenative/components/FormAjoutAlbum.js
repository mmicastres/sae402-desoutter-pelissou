import * as React from "react";
import { useState, useEffect } from 'react';

import { TextInput } from "react-native-gesture-handler";
import { View, Button, StyleSheet, Picker } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Albums from '../classes/Albums';
import { UserContext } from '../App';



export default function FormulaireAjoutAlbum(props) {
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
    let pseudo = `${value.pseudo}`;
    let valide = 0;

    const [titre, setTitre] = useState("");
    const [sortie_album, setSortie_album] = useState("");
    const [pochette, setPochette] = useState("");
    const [nom_categorie, setSelectedValue] = useState("Pop");


    const HandleChangeTitre = (event) => setTitre(event.target.value);
    const HandleChangeSortie_album = (event) => setSortie_album(event.target.value);
    const HandleChangePochette = (event) => setPochette(event.target.value);
    // function handleChangeCategorie (event){
    //     setCategorie(event.target.value);
    // }



    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Albums(titre, date_ajout, sortie_album, pochette, nom_categorie, pseudo,valide);
        console.log(data);
        props.handlerUtilisateur(data);
    }



    return (
        <View style={styles.container}>
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

            <Picker style={styles.select}
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
    select :{
        margin:10
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      margin: 10,
      borderRadius:15,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    picker: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
    },
    button: {
      borderRadius: 5,
      backgroundColor: '#000',
      height: 40,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });