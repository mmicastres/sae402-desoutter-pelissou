import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import { useState, useEffect } from 'react';

export default function AlbumAccueil() {
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/accueil`;

    function AlbumAccueil() {

        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setAlbums(dataJSON)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        AlbumAccueil()
    }, [])

    return (
        <View style = {styles.albumContainer}>
            {lAlbums.map((a) =>
                <AlbumCard titre = {a.titre} cover = {a.cover} id = {a.id_album}></AlbumCard>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    albumContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80%',
        justifyContent: 'space-evenly',
    },
});




