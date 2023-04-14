import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import ListeTitresAlbum from '../components/ListeTitresAlbum';
import ListeComsAlbums from '../components/ListeComsAlbum';
import AjoutTitreAcceuil from '../components/AjoutTitreAccueil';
import AjoutComAccueil from '../components/AjoutComAccueil';


export default function AlbumView() {
    const route = useRoute();
    const id = route.params.id;
    const cover = route.params.cover;
    const titre = route.params.titre;
    // console.log(route)
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{titre}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `${cover}`,
                }}
            />
            <ListeTitresAlbum id_album = {id}></ListeTitresAlbum>
            <AjoutTitreAcceuil id_album = {id}></AjoutTitreAcceuil>
            <ListeComsAlbums id_album = {id}></ListeComsAlbums>
            <AjoutComAccueil id_album={id}></AjoutComAccueil>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: 200,
        height: 200,
        // margin: 'auto',
    },
});