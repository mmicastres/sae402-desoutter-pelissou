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
import { Ionicons } from '@expo/vector-icons';
// import { UserContext} from './Contexte';
import { useState, useEffect } from 'react';


export const UserContext = React.createContext({pseudo: '', admin: ''});
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
  React.useContext(UserContext);

  const [connecte, setConnecte] = useState("0");
  useEffect(() =>
  setConnecte(UserContext.admin)
  )
  console.log(UserContext._currentValue.admin)
  // if (connecte == 0){
  return (
    // <UserContext.Provider value={connecte}>
    <NavigationContainer>
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
          name="Recherche"
          component={RechercheView}
          options={{
            headerShown: false,
            tabBarLabel: 'Recherche',
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
    </NavigationContainer>
    // </UserContext.Provider>
  );
// }else{
//   return (
//     <UserContext.Provider value={connecte}>
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarStyle: { position: 'absolute', backgroundColor:'#EADDFF' },
//         }}>
//         <Tab.Screen
//           name="Accueil"
//           component={MainTabNavigator}
//           options={{
//             headerShown: false,
//             tabBarLabel: 'Accueil',
//             tabBarIcon: ({size }) => (
//               <Ionicons name="home" color="black" size={size} />
//             ),
//           }} />
//         <Tab.Screen
//           name="Recherche"
//           component={RechercheView}
//           options={{
//             headerShown: false,
//             tabBarLabel: 'Recherche',
//             tabBarIcon: ({size }) => (
//               <Ionicons name="search" color="black" size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Connexion"
//           component={ConnexionView} options={{
//             headerShown: false,
//             tabBarLabel: 'Profil',
//             tabBarIcon: ({size }) => (
//               <Ionicons name="person" color="black" size={size}/>
//             ),
//           }} />
//       </Tab.Navigator>
//     </NavigationContainer>
//     </UserContext.Provider>
//   );
// }
}
// if (value.admin == 1){
//   return(
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: { position: 'absolute', backgroundColor:'#EADDFF' },
//       }}>
//       <Tab.Screen
//         name="Accueil"
//         component={MainTabNavigator}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Accueil',
//           tabBarIcon: ({size }) => (
//             <Ionicons name="home" color="black" size={size} />
//           ),
//         }} />
//       <Tab.Screen
//         name="Recherche"
//         component={RechercheView}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Recherche',
//           tabBarIcon: ({size }) => (
//             <Ionicons name="search" color="black" size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Connexion"
//         component={ConnexionView} options={{
//           headerShown: false,
//           tabBarLabel: 'Administrer',
//           tabBarIcon: ({size }) => (
//             <Ionicons name="person" color="black" size={size}/>
//           ),
//         }} />
//     </Tab.Navigator>
//   </NavigationContainer>

// );

