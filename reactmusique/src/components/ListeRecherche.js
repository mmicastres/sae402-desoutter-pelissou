import { useState, useEffect } from 'react';


export default function ListeRecherche(data){
    console.log(data.precherche)
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
            console.log(dataJSON);
            setRecherche(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        getRecherche()
        }, [])

}