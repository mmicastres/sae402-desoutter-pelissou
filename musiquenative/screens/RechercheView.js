import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import FormRecherche from '../components/FormRecherche';
import { useState } from 'react';
import ListeRecherche from '../components/ListeRecherche';
import RechercheCategories from '../components/RechercheCategories';

export default function RechercheView() {

    const [recherche, setRecherche] = useState("");
    let handleRecherche = (v) => setRecherche(v);

    return (
        <ScrollView style={styles.scroll}>
            <Text>Recherche</Text>
            <FormRecherche handler={handleRecherche} />
            <ListeRecherche precherche={recherche} />
            <View style={styles.catRecherche}>
                <Text>Recherche par catégorie :</Text>
                <RechercheCategories></RechercheCategories>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        heigth: '100%',
        width: '100%',
        textAlign: 'center'
    },
    catRecherche: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});