
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Albums from './AlbumSpe';


export default function Titres(){
    const [lTitres, setTitres] = useState([])
    const url =
    `https://sae301.alwaysdata.net/api/albums/2/titres`;

    function getTitres(){
        
          const fetchOptions = {
            method: "GET" // --> DELETE = suppression
            };
            fetch(url, fetchOptions)
            .then((response) => {
            return response.json();
            })
            .then((dataJSON) => {
            console.log(dataJSON);
            setTitres(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        getTitres()
        }, [])

    return(
        

        <div >
            <ul>
                {lTitres.map((t)=>
                    <li>
                        {t.titre}
                    </li>
                )}
            </ul>
        </div>
    )

}


       
