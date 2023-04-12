import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilView from './screens/AccueilView';
import ConnexionView from './screens/ConnexionViews';
import RechercheView from './screens/RechercheView';

function AccueilScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={AccueilView} />
    </Stack.Navigator>
  )
}

function RechercheScreen() {
  const StackRecherche = createNativeStackNavigator();
  return (
    <StackRecherche.Navigator>
      <StackRecherche.Screen name="Recherche" component={RechercheView} />
    </StackRecherche.Navigator>
  )
}

function ConnexionScreen() {
  const StackConnexion = createNativeStackNavigator();
  return (
    <StackConnexion.Navigator>
      <StackConnexion.Screen name="Connexion" component={ConnexionView} />
    </StackConnexion.Navigator>
  )
}


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen
          name="Accueil"
          component={AccueilScreen}
        />

        <Tab.Screen
          name="Recherche"
          component={RechercheScreen}
        />

        <Tab.Screen
          name="Connexion"
          component={ConnexionScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>


  );
}
