import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlbumTitres(data) {
  console.log(data.listTitre);

if (data.listTitre.length == 0 ){
  return (
    <Text style={styles.heading}>Aucun Titre</Text>
  );
}
else{
  return(
  <View style={styles.container}>
      <Text style={styles.heading}>Liste des titres :</Text>
      <View style={styles.list}>
        {data.listTitre.map((t) => (
          <Text style={styles.item}>
            {t.titre}
          </Text>
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


