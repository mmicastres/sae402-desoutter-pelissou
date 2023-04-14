import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import FormRecherche from '../components/FormRecherche';
import { useState, useEffect } from 'react';
import ListeRecherche from '../components/ListeRecherche';
import CategorieCard from './CategorieCard';

export default function RechercheCategories() {
    // console.log('iuhf')
    const [lCategorie, setCategories] = useState([])
    const url =
        `https://sae301.alwaysdata.net/api/categories`;

    function getCategories() {

        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setCategories(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=>{
        getCategories()
    },[])

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.catRecherche}>
            {lCategorie.map((c) => (
                <CategorieCard nom = {c.nom_categorie}></CategorieCard>
            ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        display:'flex',
        heigth: '100%',
        width: '100%',
    },
    catRecherche: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});