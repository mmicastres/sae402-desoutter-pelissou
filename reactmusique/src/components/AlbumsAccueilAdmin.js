// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import BoutonValidationAlbum from '../Views/BoutonsValidation/BoutonValidationAlbum';
import AlbumCard from './AlbumCard';

export default function AlbumsAccueilAdmin(props) {
    
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/admins/albums`;

    function AlbumsAccueilAdmin() {

        const fetchOptions = {
            method: "GET" 
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setAlbums(dataJSON)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        AlbumsAccueilAdmin()
    }, [])



    return (

        <div className='AlbumAccueil'>
            {lAlbums.map((t) =>
                <div>
                <AlbumCard id={t.id_album} src={t.pochette} titre={t.titre}></AlbumCard>
                </div>
            )}
            
        </div>
    )

}




