
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import MaCard from './AlbumCard';


export default function AlbumAccueil(props) {
    let max = 100
    props.handler(max)
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/accueil`;

    function AlbumAccueil() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // let max = dataJSON.length
                console.log(dataJSON);
                setAlbums(dataJSON)
                // props.handler(max)


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




