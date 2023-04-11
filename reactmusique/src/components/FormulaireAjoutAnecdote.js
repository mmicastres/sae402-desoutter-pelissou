import FormAjoutAnecdote from "../Views/FormAjoutAnecdote"
import { Routes, Route, useParams } from 'react-router-dom';


export default function FormulaireAjoutAnecdote(){
    let id = useParams();

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/artistes/${id.Pseudo}/titres/${id.idTitre}/anecdotes`;

        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
        };
        
        fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
        })
        .catch((error) => console.log(error));
    };

    return(
        <div className="FormulaireConnexion">
        <FormAjoutAnecdote handler={handlerUtilisateur} ></FormAjoutAnecdote>
        </div>
    )
}