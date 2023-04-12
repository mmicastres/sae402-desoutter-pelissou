import FormAjoutTitre from "../../components/Forms/FormAjoutTitre"
import { Routes, Route, useParams } from 'react-router-dom';


export default function FormulaireAjoutTitre(){
    let id = useParams();

    console.log(id.idAlbum);

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/artistes/${id.Pseudo}/albums/${id.idAlbum}/titres`;

        
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
        <FormAjoutTitre handler={handlerUtilisateur} ></FormAjoutTitre>
        </div>
    )
}