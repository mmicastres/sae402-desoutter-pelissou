import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import AlbumCard from './AlbumCard';
import { useState, useEffect } from 'react';
import AlbumCommentaires from './AlbumsCommentaires';


export default function ListeComsAlbums(data) {
    // console.log(data)

    const [lCommentaires, setCommentaire] = useState([])

    function getCommentaires() {
        let url = `https://sae301.alwaysdata.net/api/albums/${data.id_album}/commentaires`;

        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setCommentaire(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getCommentaires()
    }, [])

    if (lCommentaires.length == 0) {
        return (
            <Text>Aucun commentaires</Text>
        )
    }
    else {

        return (
            <View>
                <Text>Liste des commentaires : </Text>
                {lCommentaires.map((c) => (
                    <AlbumCommentaires contenu={c.commentaire} auteur={c.pseudo} date={c.date_ajout_com} note={c.note}></AlbumCommentaires>
                ))}
            </View>
        )
    }

}
