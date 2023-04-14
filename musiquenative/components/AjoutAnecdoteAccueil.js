import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FormAjoutAnecdote from './FormAjoutAnecdote';
import { useState, useEffect } from 'react';
import React from "react";


export default function AjoutAnecdoteAccueil(id) {
    console.log(id.idtitre)
    const [album, setAlbum] = useState([])
    const [artiste, setArtiste] = useState([])
    
    
    // Function that returns the id_album from the id_titre

    function getAlbum(){
        const url =
            `https://sae301.alwaysdata.net/api/titres/${id.idtitre}`;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
                setAlbum(dataJSON);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getAlbum()
    }, [id])

    console.log(album.id_album)
    
    // Function that return the Artist Name from the id_album

    function getArtiste(){
        const url =
            `https://sae301.alwaysdata.net/api/albums/${album.id_album}`;
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
            getArtiste();
    }, [id, album.id_album]);

    console.log(artiste)



    function handlerUtilisateur(data) {
        
        const url = `https://sae301.alwaysdata.net/api/artistes/${artiste.pseudo}/titres/${id.idtitre}/anecdotes`;

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
            <Text>Ajouter une Anecdote</Text>
            <FormAjoutAnecdote handlerUtilisateur={handlerUtilisateur} id={id.idtitre} pseudo={artiste.pseudo}></FormAjoutAnecdote>
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




