import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UtilisateurCard from '../components/UtilisateurCard';
import Commentaires from '../components/Commentaire';
import AlbumArtiste from '../components/AlbumArtiste';

export default function PageArtiste(data){
    let pseudo = useParams()
    // console.log(pseudo.pseudo)
    const [artiste, setArtiste] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/utilisateurs/${pseudo.pseudo}`;
        

    function getArtiste() {

        const fetchOptions = {
            method: "GET" 
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setArtiste(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getArtiste()
    }, [])

    console.log(artiste.pseudo)
    return(

        <div className="PageUti">
            <h2>{artiste.pseudo}</h2>
            <UtilisateurCard pseudo = {artiste.pseudo} date = {artiste.date_inscription}></UtilisateurCard>
            <AlbumArtiste pseudo = {artiste.pseudo}></AlbumArtiste>
            <Commentaires pseudo={artiste.pseudo}></Commentaires>
        </div>
    )
}