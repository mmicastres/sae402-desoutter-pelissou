import { StatusBar } from 'expo-status-bar';
import ConnexionAccueil from '../components/ConnexionAccueil';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function ConnexionView(){
    return(
        <View style={styles.container}>
            <Text>Connexion</Text>
            <ConnexionAccueil/>
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