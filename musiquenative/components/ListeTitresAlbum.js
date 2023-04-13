import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import { useState, useEffect } from 'react';
import AlbumTitres from './AlbumTitres';



export default function ListeTitresAlbum(data) {
    // console.log(data)
    const [lTitres, setTitres] = useState([])
    const url =
        `https://sae301.alwaysdata.net/api/albums/${data.id_album}/titres`;

    function getTitres() {

        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setTitres(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getTitres()
    }, [])

    return (
        <View>
            <AlbumTitres listTitre={lTitres}></AlbumTitres>
        </View>
    )



}



