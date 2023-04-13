import { View, Text, Image, Button, StyleSheet,TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
//    import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


export default function UtilisateurCard(data){

  console.log(data);

    const navigation = useNavigation();
    let handlePress = () =>{
        navigation.navigate('Utilisateur', {
          pseudo : data.pseudo
        });
    }

    return (
        <View style={styles.card}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image style={styles.avatar} source={{uri: 'https://static.750g.com/images/1200-630/0ed2e88c83811daea7c60e278de11b08/adobestock-28409562.jpeg'}} />
          <View style={styles.details}>
            <Text style={styles.name}>{data.pseudo}</Text>
            <Text style={styles.email}>{data.date}</Text>
          </View>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      card: {
        width:'75%',
        margin:'auto',
        flexDirection: 'colum',
        alignItems: 'left',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
      },
      details: {
        flex: 1,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      email: {
        fontSize: 14,
        color: '#888',
      },
    });