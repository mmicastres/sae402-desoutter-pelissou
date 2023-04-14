import { View, Text, Image, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import FormConnexion from './FormConnexion';
import React from "react";
import { useState, useEffect } from 'react';
import { UserContext, admin, utilisateur } from '../App';
import { useNavigation } from '@react-navigation/native';


// const value = React.createContext(UserContext);
// console.log(value);
// let value = React.useContext(UserContext);

export default function ConnexionAccueil() {
    const navigation = useNavigation();
    const value = React.useContext(UserContext);

    const [utilisateur, setUtilisateur] = useState({})
    value.changeUtilisateur = (verifAdmin, pseudo) => {
        value.admin = verifAdmin
        value.pseudo = pseudo
        console.log(value)
        navigation.replace("Accueil");
    }


    function handleDeco() {
        value.admin = undefined
        value.pseudo = undefined
        console.log(value)
        navigation.replace("Accueil");
    }


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
            value.changeUtilisateur(dataJSON.admin, dataJSON.pseudo)
        })
        .catch((error) => console.log(error));
}

if (value.pseudo == "0") {
    return (
        <View >
            <FormConnexion handlerUtilisateur={handlerUtilisateur} ></FormConnexion>
            {/* <Text>{utilisateur.pseudo}</Text> */}
        </View>
    )
} else {
    return (
        <View >
            <FormConnexion handlerUtilisateur={handlerUtilisateur} ></FormConnexion>
            <Button onPress={handleDeco} title="Me déconnecter"></Button>
            {/* <Text>{utilisateur.pseudo}</Text> */}
        </View>
    )
}
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




