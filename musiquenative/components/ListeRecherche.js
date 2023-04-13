import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumCard from './AlbumCard';
import TitreCard from './TitreCard';
import UtilisateurCard from './UtilisateurCard';



export default function ListeRecherche(data){
    // console.log(data.precherche)
    const initialState = []
    const [lRecherche, setRecherche] = useState([])
    const url =
    `https://sae301.alwaysdata.net/api/recherche?recherche=`;

    function getRecherche(){
        
        if(data.precherche != ""){
            const fetchOptions = {
                method: "GET" 
                };
                fetch(url + data.precherche, fetchOptions)
                .then((response) => {
                return response.json();
                })
                .then((dataJSON) => {
                  console.log(dataJSON);
                  setRecherche(dataJSON);
                  console.log(lRecherche.length);
                })
                .catch((error) => console.log(error));
        }
         
    }

    useEffect(()=> {
        setRecherche(initialState)
        getRecherche()
        }, [data])


        if(lRecherche.length != 0){
          return(
            <View>
            {lRecherche[1].map((t) =>
              <AlbumCard id={t.id_album} src={t.pochette} titre={t.titre}></AlbumCard>
          )}
            {lRecherche[2].map((t) =>
              <TitreCard idTitre = {t.id_titre} titre = {t.titre} idAlbum={t.id_album} paroles = {t.paroles} pochette = {t.pochette} pseudo = {t.pseudo} lien = {t.lien}></TitreCard>
          )}
            {lRecherche[0].map((a) =>
               <UtilisateurCard pseudo = {a.pseudo} date = {a.date_inscription}></UtilisateurCard>
          )}

             {/* {lRecherche[0].map((a) =>
        //     <UtilisateurCard pseudo = {a.pseudo} date = {a.date_inscription}></UtilisateurCard>
        //   )}
        //     {lRecherche[2].map((t) =>
        //     <TitreCard idTitre = {t.id_titre} titre = {t.titre} idAlbum={t.id_album}></TitreCard>
        //   )} */}
           </View>
          )
        }
        

}