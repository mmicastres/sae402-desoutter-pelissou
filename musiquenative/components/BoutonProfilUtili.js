import * as React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';




export default function BoutonNavAjout() {

  const navigation = useNavigation();
    let handlePress = () =>{
      navigation.navigate('Profil',{});
  }



  return (
    <View>
      <Button style={styles.button} onPress={handlePress} title="Aller sur mon Profil"></Button>
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