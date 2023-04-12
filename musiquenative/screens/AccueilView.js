import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumAccueil from '../components/AlbumsAccueil';


export default function AccueilView() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Les derniers albums : </Text>
            <AlbumAccueil></AlbumAccueil>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        // justifyContent: 'center',
    },
});