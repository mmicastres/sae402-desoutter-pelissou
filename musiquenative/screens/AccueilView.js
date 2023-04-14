import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumAccueil from '../components/AlbumsAccueil';
import BoutonNavAjout from '../components/ButtontoAjoutAlbum';
import BoutonProfilUtili from '../components/BoutonProfilUtili';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../App';
import React from 'react';

export default function AccueilView() {
    let value = React.useContext(UserContext);
    const navigation = useNavigation();

    if (value.admin == "1") {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Les derniers albums : </Text>
            <AlbumAccueil></AlbumAccueil>
            <BoutonNavAjout></BoutonNavAjout>
            <BoutonProfilUtili></BoutonProfilUtili>
        </View>
    )
    }else{
        return(
            <View style={styles.container}>
            <Text style={styles.textStyle}>Les derniers albums : </Text>
            <AlbumAccueil></AlbumAccueil>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    textStyle: {
        width: '100%',
        backgroundColor: 'yellow',
        alignItems: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
});