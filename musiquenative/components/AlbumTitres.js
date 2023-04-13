import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import TitreCard from './TitreCard';

export default function AlbumTitres(data) {
  const [titre, setTitre] = useState([])
  console.log(data.listTitre);

  let handlePress = (t) =>{
    // navigation.navigate('Titre', {
    //     id: data.idTitre,
    //     titre: data.titre,
    //     lien: data.lien,
    //     paroles: data.paroles,
    //     pseudo: data.pseudo,
    //     idAlbum: data.idAlbum,
    //     pochette: data.pochette
    // });
    // console.log(e)
    console.log("test")
    console.log(t)
  }

if (data.listTitre.length == 0 ){
  return (
    <Text style={styles.heading}>Aucun Titre</Text>
  );
}
else{
  return(
  <View style={styles.container}>
      <Text style={styles.heading}>Liste des titres :</Text>
      <View>
        {data.listTitre.map((t) => (
            <TitreCard idTitre = {t.id_titre} titre = {t.titre} idAlbum={t.id_album} paroles = {t.paroles} pochette = {t.pochette} pseudo = {t.pseudo} lien = {t.lien}></TitreCard>
        ))}
      </View>
    </View>
  )
}
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});


