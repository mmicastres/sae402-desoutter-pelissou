import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import FormRecherche from '../components/FormRecherche';
import { useState } from 'react';
import ListeRecherche from '../components/ListeRecherche';

export default function CategorieCard(data){
    return (
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjBJj78f4UdvjiOVo4biJsfHZFQb3db2ZuQ&usqp=CAU' }}
              style={styles.image}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.nom}</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      card: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },
      titleContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
