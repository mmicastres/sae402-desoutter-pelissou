import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import ListeTitresAlbum from '../components/ListeTitresAlbum';
import ListeComsAlbums from '../components/ListeComsAlbum';
import { useState, useEffect } from 'react';

export default function GetAnecdote(data) {
    console.log(data);
    const [anecdote, setAnecdote] = useState([])

    function getRecherche() {
        const url =
            `https://sae301.alwaysdata.net/api/titres/${data.idtitre}/anecdotes`;
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


        if(anecdote.length != 0){
            return(
                <Text>{anecdote.contenu}</Text>
            )
        }
    
}


