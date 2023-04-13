import { StatusBar } from 'expo-status-bar';
import InscriptionAccueil from '../components/InscriptionAccueil';
import {SafeAreaView, StyleSheet, TextInput, Text, View} from 'react-native';
import * as React from 'react';

export default function ConnexionView(){
    return(
        <View style={styles.container}>
            <Text>BipBoup</Text>
            <InscriptionAccueil/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});