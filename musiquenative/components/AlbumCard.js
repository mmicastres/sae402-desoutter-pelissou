import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


export default function AlbumCard(data){
    const navigation = useNavigation();
    let handlePress = () =>{
        navigation.navigate('Album', {
            id: data.id,
            titre: data.titre,
            cover: data.cover,
        });
    }
    console.log(data.cover)
    return (
        <View>

            <Card style={styles.card}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://static.750g.com/images/1200-630/0ed2e88c83811daea7c60e278de11b08/adobestock-28409562.jpeg',
                    }}
                />

                <Text style={styles.textCard}>
                    {data.titre}
                </Text>
                <Button
                    onPress={handlePress}
                    value = {data.titre}
                    title="Voir"
                    color="#841584"
                />
            </Card>
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