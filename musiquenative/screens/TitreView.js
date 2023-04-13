import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import ListeTitresAlbum from '../components/ListeTitresAlbum';
import ListeComsAlbums from '../components/ListeComsAlbum';

export default function TitreView() {
    const route = useRoute();
    const id = route.params.id;
    const titre = route.params.titre;
    const paroles = route.params.titre;
    // console.log(route)
    return (
        <ScrollView style={styles.container}>
          <View style={styles.albumCoverContainer}>
            <Image style={styles.albumCover} source={{ uri: 'https://static.750g.com/images/1200-630/0ed2e88c83811daea7c60e278de11b08/adobestock-28409562.jpeg' }} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{titre}</Text>
          </View>
          <View style={styles.parolesContainer}>
            <Text style={styles.paroles}>{paroles}</Text>
          </View>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F9F2F2',
      },
      albumCoverContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 150,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
      albumCover: {
        height: 250,
        width: 250,
        borderRadius: 125,
      },
      titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
      },
      parolesContainer: {
        marginHorizontal: 20,
        marginBottom: 40,
      },
      paroles: {
        fontSize: 18,
        textAlign: 'justify',
      },
    });