
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Albums from '../Views/AlbumSpe';
import ListDividers from './Divider';
import { Link } from 'react-router-dom';


export default function Titres(data){
    // console.log(data)
    const [lTitres, setTitres] = useState([])
    const url =
    `https://sae301.alwaysdata.net/api/albums/${data.id_album}/titres`;

    function getTitres(){
        
          const fetchOptions = {
            method: "GET" 
            };
            fetch(url, fetchOptions)
            .then((response) => {
            return response.json();
            })
            .then((dataJSON) => {
            // console.log(dataJSON);
            setTitres(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        getTitres()
        }, [])

        // console.log(lTitres[0].id_album);

    return(
        

        <div className='titreContainer'>
                <ListDividers listTitre={lTitres}></ListDividers>
        </div>
    )

}


       
