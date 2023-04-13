import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';

export default function AlbumView(){
    const route = useRoute();
    const id = route.params.id;
    console.log(id)
    return(
        <View style={styles.container}>
            <Text>AlbuView</Text>
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