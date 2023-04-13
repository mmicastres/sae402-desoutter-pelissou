import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


export default function TitreCard(data) {
    const navigation = useNavigation();
    let handlePress = () =>{
        navigation.navigate('Titre', {
            id: data.idTitre,
            titre: data.titre,
            lien: data.lien,
            paroles: data.paroles,
            pseudo: data.pseudo,
            idAlbum: data.idAlbum,
            pochette: data.pochette
        });
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Card style={styles.card}>
                    <Text style={styles.textCard}>
                        {data.titre}
                    </Text>
                </Card>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    card: {
        display: 'flex',
        color: 'blue',
        backgroundColor: 'red',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 'auto',
    },
    textCard: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});