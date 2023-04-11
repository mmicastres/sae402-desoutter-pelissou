import {useState, useEffect} from 'react';
import FormulaireConnexion from '../components/FormulaireConnexion';

export default function ProfilView() {

    return(
    <div className='FormulaireConnexion'>
    <FormulaireConnexion></FormulaireConnexion>
    </div>
    )
    // const [utilisateurs, setUtilisateurs] = useState([]);

    // const apiKey = "Sid"
    // const url = "https://sae301.alwaysdata.net/api/utilisateurs/" + apiKey

    // const fetchOptions = { method: "GET" };
    // useEffect(() => {
    //     fetch(url, fetchOptions)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((dataJSON) => {
    //             console.log(dataJSON);
    //             setUtilisateurs(dataJSON);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);
    // console.log(utilisateurs.pseudo)
    }