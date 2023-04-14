import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import ListeTitresAlbum from '../components/ListeTitresAlbum';
import ListeComsAlbums from '../components/ListeComsAlbum';
import AjoutAnecdoteAccueil from '../components/AjoutAnecdoteAccueil';
import { useState, useEffect } from 'react';

export default function GetAnecdote(data) {
    console.log(data);
    const [anecdote, setAnecdote] = useState([])

    function getRecherche() {
        const url =
            `https://sae301.alwaysdata.net/api/titres/${data.contenu}/anecdotes`;
        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
                setAnecdote(dataJSON);
            })
            .catch((error) => console.log(error));
    }
    useEffect(()=> {
        getRecherche()
        }, [data])

        console.log(anecdote.contenu)

            return(
                <View>
                <Text>{anecdote.contenu}</Text>
                <AjoutAnecdoteAccueil idtitre = {data.idtitre}></AjoutAnecdoteAccueil>
                </View>
            )
}


