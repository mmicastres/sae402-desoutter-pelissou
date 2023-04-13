import * as React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import Utilisateurs from "../classes/Utilisateurs";
import { useNavigation } from '@react-navigation/native';
//  import { userAdmin } from "../../App"




export default function BoutonNavAjout() {

  const navigation = useNavigation();
    let handlePress = () =>{
      navigation.navigate('Ajout-Album',{});
  }



  return (
    <View>
      <Button style={styles.button} onPress={handlePress} title="Ajouter un Album"></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderColor: '#333333',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  }
});