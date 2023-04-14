import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import FormAjoutCom from './FormAjoutCom';
import React from "react";


export default function AjoutComAccueil(id) {
    console.log(id.id_album)
    
    function handlerUtilisateur(data) {
        
        const url = `https://sae301.alwaysdata.net/api/albums/${id.id_album}/commentaires`;

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
            <Text>Ajouter un Commentaire</Text>
            <FormAjoutCom handlerUtilisateur={handlerUtilisateur}></FormAjoutCom>
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




