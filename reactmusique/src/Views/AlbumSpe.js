
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Titres from '../components/Titres';
import Commentaires from '../components/Commentaire';
import FormulaireAjoutCom from './Formulaires/FormulaireAjoutCom';
import { Routes, Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function AlbumSpe() {
    let id = useParams();
    // console.log(id.id)
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/albums/${id.idAlbum}`;

    function getAlbum() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
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
            <div className='AlbumInfo'>
                <div className='AlbumCover'>
                    <p>tesy</p>
                    <Link to={`/artiste/${lAlbums.pseudo}`}>
                        <p>{lAlbums.pseudo}</p>
                    </Link>
                </div>
                <div className='listeTitre'>
                    <Titres id_album={id.idAlbum}></Titres>
                </div>
            </div>
            <div className='listeCom'>
                <h3>Commentaires : </h3>
                <Commentaires id_album={id.idAlbum}></Commentaires>
            </div>
            <div>
                <FormulaireAjoutCom id_album = {id.idAlbum}></FormulaireAjoutCom>
            </div>

        </div>
    )

}

