import AlbumAccueil from "../components/AlbumAccueil"
import { Button } from "@mui/material"
import MonBouton from "../components/MonBouton"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function Accueil() {
    const [nbrRand, setRand] = useState("");
    let maxAlbumHandler = (max) => {
        let rand = Math.floor(Math.random() * max);
        setRand(rand)
    }
    
    return (
        <div className="Accueil">
            <AlbumAccueil handler={maxAlbumHandler}></AlbumAccueil>
            <Link to={`/album/${nbrRand}`}>
                <MonBouton contenu={"Album aléatoire"}></MonBouton>
            </Link>
            
        </div>
    )
}