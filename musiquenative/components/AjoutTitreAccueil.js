import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import FormAjoutTitre from './FormAjoutTitre';
import React from "react";
import { useState, useEffect } from 'react';
import UserContext from '../Contexte';
import { createContext } from 'react';


export default function AjoutTitreAccueil(id) {
    console.log(id.id_album)
    const [artiste, setArtiste] = useState([])
    

    function getArtiste(){
        const url =
            `https://sae301.alwaysdata.net/api/albums/${id.id_album}`;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
                setArtiste(dataJSON);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getArtiste()
    }, [id])
    

    console.log(artiste.pseudo);

    function handlerUtilisateur(data) {
        
        const url = `https://sae301.alwaysdata.net/api/artistes/${artiste.pseudo}/albums/${id.id_album}/titres`;

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
        };

        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
            })
            .catch((error) => console.log(error));
        //     window.location.replace(
        //     "/"
        //   );
    };

    return (
        <View >
            <Text>Ajouter un Titre</Text>
            <FormAjoutTitre handlerUtilisateur={handlerUtilisateur} id={id.id_album} pseudo={artiste.pseudo} pochette={artiste.pochette}></FormAjoutTitre>
        </View>
    )
}

// const styles = StyleSheet.create({
//     albumContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         width: '100%',
//         height: '80%',
//         justifyContent: 'space-evenly',
//     },
// });




