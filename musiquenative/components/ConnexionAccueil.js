import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import FormConnexion from './FormConnexion';
import React from "react";
import { useState, useEffect } from 'react';
import { UserContext } from '../App';
import { useNavigation } from '@react-navigation/native';


const value = React.createContext(UserContext);
// console.log(value);
// let value = React.useContext(UserContext);

export default function AlbumAccueil() {
    const value = React.useContext(UserContext);
    console.log(value.admin)
    // value.admin = "ufieuf"
    // console.log(value);
    const [utilisateur, setUtilisateur] = useState("")
    const navigation = useNavigation();


    function handlerUtilisateur(data) {
        const url = `https://sae301.alwaysdata.net/api/connexion`;

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
                console.log(dataJSON)
                setUtilisateur(dataJSON)
                // console.log(dataJSON.pseudo)
                value.pseudo = dataJSON.pseudo
                value.admin = dataJSON.admin
                console.log(value)
                navigation.replace("Accueil");
                
                

            })
            .catch((error) => console.log(error));
    }

    return (
        <View >
            <FormConnexion handlerUtilisateur={handlerUtilisateur} ></FormConnexion>
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




