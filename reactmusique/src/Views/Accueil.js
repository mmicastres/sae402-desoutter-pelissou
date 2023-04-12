import AlbumAccueil from "../components/AlbumAccueil"
import AlbumsAccueilAdmin from "../components/AlbumsAccueilAdmin"
import { Button } from "@mui/material"
import MonBouton from "../components/MonBouton"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function Accueil() {
    const [nbrRand, setRand] = useState("");
    let maxAlbumHandler = (rand) => {
        setRand(rand)
    }
    
    return (
        <div className="Accueil">
            <AlbumAccueil handler={maxAlbumHandler}></AlbumAccueil>
            <Link to={`/album/${nbrRand}`}>
                <MonBouton contenu={"Album aléatoire"}></MonBouton>
            </Link>

            <h3>Liste des Albums non valides</h3>
                <AlbumsAccueilAdmin/>
            
        </div>
    )
}