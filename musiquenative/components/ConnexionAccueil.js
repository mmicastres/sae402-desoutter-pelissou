import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import FormConnexion from './FormConnexion';
import { useState, useEffect } from 'react';

export default function AlbumAccueil() {

    // function handlerUtilisateur(){
    // const url = `https://sae301.alwaysdata.net/api/connexion`;

    // let myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const fetchOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
    // };
    // fetch(url, fetchOptions)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((dataJSON) => {
    //         setUtilisateur(dataJSON[0])
            // console.log(dataJSON[0].pseudo)
            // value.pseudo = dataJSON[0].pseudo
            // value.admin = dataJSON[0].admin
            // console.log(value)
            // userContext = React.createContext(dataJSON[0].pseudo);
            // userAdmin = React.createContext(dataJSON[0].admin);
            // const value = React.useContext(UserContext);
            // console.log(value)
            // console.log(userContext._currentValue)
            // console.log(userAdmin._currentValue)
            // console.log(userContext._currentValue)

        // })
        // .catch((error) => console.log(error));

        // window.location.replace(
        //     "/"
        //   );
    // }

    return (
        <View >
            <FormConnexion ></FormConnexion>
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




