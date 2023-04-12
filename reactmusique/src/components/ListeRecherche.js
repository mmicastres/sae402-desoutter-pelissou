import { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import UtilisateurCard from './UtilisateurCard';


export default function ListeRecherche(data){
    // console.log(data.precherche)
    const initialState = []
    const [lRecherche, setRecherche] = useState([])
    const url =
    `https://sae301.alwaysdata.net/api/recherche?recherche=`;

    function getRecherche(){
        
          const fetchOptions = {
            method: "GET" 
            };
            fetch(url + data.precherche, fetchOptions)
            .then((response) => {
            return response.json();
            })
            .then((dataJSON) => {
              // console.log(dataJSON);
              setRecherche(dataJSON);
              // setRecherche(initialState)
              console.log(lRecherche);
              
      

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        setRecherche(initialState)
        getRecherche()
        }, [data])


        if(lRecherche.length != 0){
          return(
            <div>
            {lRecherche[1].map((t) =>
              <AlbumCard id={t.id_album} src={t.pochette} titre={t.titre}></AlbumCard>
          )}
            {lRecherche[0].map((a) =>
            <UtilisateurCard pseudo = {a.pseudo} date = {a.date_inscription}></UtilisateurCard>
          )}
          </div>
          )
        }
        

}