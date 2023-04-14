import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import ListeTitresAlbum from '../components/ListeTitresAlbum';
import ListeComsAlbums from '../components/ListeComsAlbum';
import { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import AlbumCommentaires from './AlbumsCommentaires';


export default function GetUtilisateur(data) {
    console.log(data.pseudo);
    const [utilisateur, setUtilisateur] = useState([])
    const [artiste, setArtiste] = useState([])
    const [commentaire, setCommentaire] = useState([])

    // Get all informations about the user

    function getUtilisateur() {
        const url =
            `https://sae301.alwaysdata.net/api/utilisateurs/${data.pseudo}`;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
                setUtilisateur(dataJSON);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getUtilisateur()
    }, [data])


    // Verify if the user clicked has any albums

    function getArtiste() {
        const url =
            `https://sae301.alwaysdata.net/api/artistes/${data.pseudo}/albums`;
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
    }, [data])




    // Get all the comments posted by the User

    function getCommentaire() {
        const url =
            `https://sae301.alwaysdata.net/api/utilisateurs/${data.pseudo}/commentaires`;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
                setCommentaire(dataJSON);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getCommentaire()
    }, [data])





    console.log(commentaire)
    console.log(artiste)

    if (utilisateur.length != 0) {
        return (
            <View>
                <Text>{utilisateur.date_inscription}</Text>
                <Image style={styles.albumCover} source={{ uri: `${utilisateur.pp}` }} />
                {artiste.map((t) => (
                    <AlbumCard idTitre={t.id_titre} titre={t.titre} idAlbum={t.id_album} paroles={t.paroles} pochette={t.pochette} pseudo={t.pseudo} lien={t.lien}></AlbumCard>
                ))}
                {commentaire.map((c) => (
                    <AlbumCommentaires contenu={c.commentaire} auteur={c.pseudo} date={c.date_ajout_com} note={c.note}></AlbumCommentaires>
                ))}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    albumCover: {
        height: 250,
        wpseudoth: 250,
        borderRadius: 10,
    }
}
)