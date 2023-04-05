
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import MaCard from './Card';


export default function AlbumAccueil() {
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
                console.log(dataJSON);
                setAlbums(dataJSON)
                

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        AlbumAccueil()
    }, [])

    

    return (

        <div className='AlbumAccueil'>

            {/* <h2>Titre album : {lAlbums.titre}</h2>
                 <Titres></Titres>
                 <Commentaires></Commentaires> */}


            {lAlbums.map((t) =>
                <MaCard id={t.id_album} src={t.pochette} titre={t.titre}></MaCard>
                // <p>{t.titre}</p>

            )}


        </div>
    )

}




