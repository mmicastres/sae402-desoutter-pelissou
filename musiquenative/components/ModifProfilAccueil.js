import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import FormInscription from './FormInscription';
import React from "react";
import { UserContext } from '../App';
import FormModifUtilisateur from './FormModifUtilisateur';


export default function ModifProfilAccueil() {

    let value = React.useContext(UserContext);
    console.log(value)

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/utilisateurs/${value.pseudo}/modif`;

        console.log(data);
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const fetchOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
        };
        
        fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            window.location.reload();
        })
        .catch((error) => console.log(error));
    };

    return(
        <FormModifUtilisateur handler={handlerUtilisateur} pseudo={value.pseudo}></FormModifUtilisateur>
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




