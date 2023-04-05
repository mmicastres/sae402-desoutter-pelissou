
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Titres from './Titres';
import Commentaires from './Commentaire';
import { Routes, Route, useParams } from 'react-router-dom';

export default function AlbumSpe() {
    let id = useParams();
    // console.log(id.id)
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/albums/${id.id}`;

    function getAlbum() {

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
        getAlbum()
    }, [])



    return (

        <div className='Album'>

            <h2>Titre album : {lAlbums.titre}</h2>
            <Titres id_album={id.id}></Titres>
            <Commentaires id_album={id.id}></Commentaires>


        </div>
    )

}

