const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

]

import { View, Text, Image, Button, StyleSheet } from 'react-native'
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';

export default function AlbumAccueil() {
    return (
        <View style= {styles.cardView}>
            <Card style = {styles.card}>
                <Text>
                    Titre album
                </Text>
                <Button size="sm" type="clear">
                    Voir
                </Button>
            </Card>
            <Card style = {styles.card}>
                <Text>
                    Titre album
                </Text>
                <Button size="sm" type="clear">
                    Voir
                </Button>
            </Card>
         </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'red',
        width:'100%',
        justifyContent: 'space-around',
    },
    card: {
        flex: 1,
        backgroundColor: 'blue',
        width:50,
        // justifyContent: 'center',
    },
});


