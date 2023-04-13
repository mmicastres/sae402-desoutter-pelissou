import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import FormRecherche from '../components/FormRecherche';
import { useState } from 'react';
import ListeRecherche from '../components/ListeRecherche';

export default function RechercheView() {

const [recherche, setRecherche] = useState("");
let handleRecherche = (v) => setRecherche(v);
  
    return (
        <View style={styles.container}>
            <Text>Recherche</Text>
            <FormRecherche handler={handleRecherche}  />
            <ListeRecherche precherche= {recherche}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height:'100%'
    },
});