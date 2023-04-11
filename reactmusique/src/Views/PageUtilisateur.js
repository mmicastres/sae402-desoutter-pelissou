import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UtilisateurCard from '../components/UtilisateurCard';
import Commentaires from '../components/Commentaire';


export default function PageUtilisateur(){
    let pseudo = useParams()
    // console.log(pseudo.pseudo)
    const [utilisateur, setUtilisateur] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/utilisateurs/${pseudo.pseudo}`;
        

    function getUtilisateur() {

        const fetchOptions = {
            method: "GET" 
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setUtilisateur(dataJSON)

            })
            .catch((error) => console.log(error));


    }

    useEffect(() => {
        getUtilisateur()
    }, [])


    return(

        <div className="PageUti">
            <h2>{utilisateur.pseudo}</h2>
            <UtilisateurCard pseudo = {utilisateur.pseudo} date = {utilisateur.date_inscription}></UtilisateurCard>
            <Commentaires pseudo={utilisateur.pseudo}></Commentaires>
        </div>
    )
}