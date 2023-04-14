import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import GetProfil from '../components/GetProfil';
import ModifProfilAccueil from '../components/ModifProfilAccueil';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../App';
import { Button } from '@rneui/base';



export default function ProfilView() {

    const navigation = useNavigation();
    let value = React.useContext(UserContext);
    console.log(value)


    const pseudo = value.pseudo;
    console.log(pseudo);
    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{pseudo}</Text>
            </View>
            {/* <View style={styles.albumCoverContainer}>
            <Image style={styles.albumCover} source={{ uri: 'https://static.750g.com/images/1200-630/0ed2e88c83811daea7c60e278de11b08/adobestock-28409562.jpeg' }} />
          </View> */}
            <View style={styles.parolesContainer}>
                <GetProfil pseudo={pseudo}></GetProfil>
            </View>
            <View style={styles.parolesContainer}>
                <Text style={styles.title}>Modifer mon Profil</Text>
                <ModifProfilAccueil></ModifProfilAccueil>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    albumCoverContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        marginVertical: 30,
        marginHorizontal: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            wpseudoth: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: '#F9F2F2',
    },
    albumCover: {
        height: 250,
        wpseudoth: 250,
        borderRadius: 10,
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
        backgroundColor: '#F9F2F2',
    },
    paroles: {
        fontSize: 18,
        textAlign: 'justify',
    },
});