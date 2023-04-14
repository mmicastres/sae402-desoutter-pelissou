import * as React from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilView from './screens/AccueilView';
import ConnexionView from './screens/ConnexionViews';
import InscriptionView from './screens/InscriptionView';
import RechercheView from './screens/RechercheView';
import UtilisateurView from './screens/UtilisateurView';
import AlbumView from './screens/AlbumView';
import TitreView from './screens/TitreView';
import AjoutView from './screens/AjoutView';
import ProfilView from './screens/ProfilView';
import { Ionicons } from '@expo/vector-icons';
// import { UserContext} from './Contexte';
import { useState, useEffect } from 'react';


export const UserContext = React.createContext({
  pseudo: '0', admin: '0',
  changeUtilisateur: () => { }
});
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={AccueilView} options={{ headerShown: false }} />
      <Stack.Screen name="Album" component={AlbumView} />
      <Stack.Screen name="Titre" component={TitreView} />
      <Stack.Screen name="Utilisateur" component={UtilisateurView} />
      <Stack.Screen name="Ajout-Album" component={AjoutView} options={{ headerShown: false }} />
      <Stack.Screen name="Profil" component={ProfilView} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

function ConnexionTabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Connexion" component={ConnexionView} options={{ headerShown: false }} />
      <Stack.Screen name="Inscription" component={InscriptionView} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

export default function App() {
  const value = React.useContext(UserContext);

  const [admine, setAdmin] = useState(false);

  function actualise(){
    setAdmin(true)
    console.log("JACTUALISE")
  }

  // const { value } = useContext(UserContext);



  // const [connecte, setConnecte] = useState("0");
  // useEffect(() =>
  //   setConnecte(UserContext.admin)
  // )
  // console.log(UserContext._currentValue.admin)
  if (value.admin == 0){
  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        <UserContext.Consumer>
          {value => (
            <Tab.Navigator
              screenOptions={{

                tabBarActiveBackgroundColor:'#c8aef2',
                tabBarActiveTintColor:'black',
                tabBarStyle: { position: 'absolute', backgroundColor: '#EADDFF' },
              }}>
              <Tab.Screen
                name="Accueil"
                component={MainTabNavigator}
                options={{
                  headerShown: false,
                  tabBarLabel: 'Accueil',
                  tabBarIcon: ({ size }) => (
                    <Ionicons name="home" color="black" size={size} />
                  ),
                }} />
              <Tab.Screen
                name='Recherche'
                component={RechercheView}
                options={{
                  headerShown: false,
                  tabBarLabel: `Recherche`,
                  tabBarIcon: ({ size }) => (
                    <Ionicons name="search" color="black" size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Connexion"
                component={ConnexionTabNavigator} options={{
                  headerShown: false,
                  tabBarLabel: 'Profil',
                  tabBarIcon: ({ size }) => (
                    <Ionicons name="person" color="black" size={size} />
                  ),
                }} />

            </Tab.Navigator>
          )}
        </UserContext.Consumer>
      </NavigationContainer>
    </UserContext.Provider>
  );
  }
  else{
    return (
      <UserContext.Provider value={value}>
        <NavigationContainer>
          <UserContext.Consumer>
            {value => (
              <Tab.Navigator
                screenOptions={{
                  tabBarStyle: { position: 'absolute', backgroundColor: '#EADDFF' },
                }}>
                <Tab.Screen
                  name="Accueil"
                  component={MainTabNavigator}
                  options={{
                    headerShown: false,
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ size }) => (
                      <Ionicons name="home" color="black" size={size} />
                    ),
                  }} />
      
                <Tab.Screen
                  name="Connexion"
                  component={ConnexionTabNavigator} options={{
                    headerShown: false,
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ size }) => (
                      <Ionicons name="person" color="black" size={size} />
                    ),
                  }} />
  
              </Tab.Navigator>
            )}
          </UserContext.Consumer>
        </NavigationContainer>
      </UserContext.Provider>
    )
  }
}
