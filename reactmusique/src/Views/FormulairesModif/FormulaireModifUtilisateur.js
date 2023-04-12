import FormModifUtilisateur from "../../components/FormsModif/FormModifUtilisateur";

import { useParams } from 'react-router-dom';


export default function FormulaireModifUtilisateur(){

    let id = useParams();

    console.log(id.Pseudo)

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/utilisateurs/${id.Pseudo}/modif`;

        console.log(data);
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const fetchOptions = {
            method: "PUT",
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
        <FormModifUtilisateur handler={handlerUtilisateur} ></FormModifUtilisateur>
        </div>
    )
}