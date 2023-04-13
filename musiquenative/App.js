import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilView from './screens/AccueilView';
import ConnexionView from './screens/ConnexionViews';
import RechercheView from './screens/RechercheView';
import AlbumView from './screens/AlbumView';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={AccueilView} />
      <Tab.Screen name="Recherche" component={RechercheView} />
      <Tab.Screen name="Connexion" component={ConnexionView} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Album" component={AlbumView} />
        {/* <Stack.Screen name="Titre" component={TitreView} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
