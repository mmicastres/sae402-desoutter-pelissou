import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
// import { UserContext } from '../Contexte';
import { UserContext } from '../App';
import React, { useEffect } from 'react';


export default function AlbumCard(data) {
    let value = React.useContext(UserContext);
    console.log(value)

    
    console.log("Album", value.admin)
    const navigation = useNavigation();
    let handlePress = () => {
        console.log(value)
        navigation.navigate('Album', {
            id: data.id,
            titre: data.titre,
            cover: data.cover,
        });
    }

    if (value.admin == "1") {
    return (
        <View>
            <Card style={styles.card}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: `${data.cover}`,
                    }}
                />

                <Text style={styles.textCard}>
                    {data.titre}
                </Text>
                <Button
                    onPress={handlePress}
                    value={data.titre}
                    title="Voir"
                    color="#841584"
                />
                <Button
                    value='SUPPRIMER'
                    title='SUPPRIMER'
                    color="#841584"
                />
            </Card>
        </View>
    )
}
else{

    return (
        <View>
            <Card style={styles.card}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: `${data.cover}`,
                    }}
                />

                <Text style={styles.textCard}>
                    {data.titre}
                </Text>
                <Button
                    onPress={handlePress}
                    value={data.titre}
                    title="Voir"
                    color="#841584"
                />
            </Card>
        </View>
    )

}
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