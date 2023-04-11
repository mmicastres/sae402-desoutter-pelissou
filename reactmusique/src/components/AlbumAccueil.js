
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import MaCard from './AlbumCard';


export default function AlbumAccueil(props) {
    
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/accueil`;

    function AlbumAccueil() {

        const fetchOptions = {
            method: "GET" 
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setAlbums(dataJSON)
                let max = dataJSON.length;
                let r = Math.floor(Math.random() * max);
                let rand = dataJSON[r].id_album;
                props.handler(rand);

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        AlbumAccueil()
    }, [])



    return (

        <div className='AlbumAccueil'>
            {lAlbums.map((t) =>
                <MaCard id={t.id_album} src={t.pochette} titre={t.titre}></MaCard>
            )}
        </div>
    )

}




