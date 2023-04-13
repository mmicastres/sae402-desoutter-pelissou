import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumAccueil from '../components/AlbumsAccueil';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function AccueilView() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Les derniers albums : </Text>
            <AlbumAccueil></AlbumAccueil>
            <Button
                title="Go to Details"
                onPress={(e) => navigation.navigate('Album', {id: '5'})}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    textStyle: {
        width: '100%',
        backgroundColor: 'yellow',
        alignItems: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
});