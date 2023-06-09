import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function PageTitre() {
    let id = useParams();
    // console.log(id);

    const [leTitre, setTitre] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/titres/${id.idTitre}`;

    function getTitre() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setTitre(dataJSON)

            })
            .catch((error) => console.log(error));


    }

    useEffect(() => {
        getTitre()
    }, [])

    return (
        <div className='PageTitre'>
            <h2>Le titre : {leTitre.titre}</h2>
            <img src="https://www.netcost-security.fr/wp-content/uploads/2021/11/1636044306_Lhistoire-de-GigaChad-lultra-masculin-mi-meme-mi-legende-urbaine.jpg"></img>
            {/* Composant Anecdote */}
            <h2>L'annecdote</h2>
            <h2>Les paroles : {leTitre.paroles}</h2>
        </div>
    )
}
