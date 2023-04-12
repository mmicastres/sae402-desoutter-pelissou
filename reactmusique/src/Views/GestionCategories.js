import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SupressionCategories from '../components/Forms/FormSupressionCategories';
import FormulaireAjoutCategorie from './Formulaires/FormulaireAjoutCategorie';


export default function GestionCategorie() {


    // Importing all the categories and fetching them all to use them later

    const [lCategorie, setCategories] = useState([])
    const url =
        `https://sae301.alwaysdata.net/api/categories`;

    function getCategories() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setCategories(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getCategories()
    }, [])



    return (
        <div>
            {/* {lCategorie.map((c) => */}
                <SupressionCategories cats={lCategorie}></SupressionCategories>
                <FormulaireAjoutCategorie></FormulaireAjoutCategorie>
            
        </div>
    )
}
