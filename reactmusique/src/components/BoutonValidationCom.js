import BtnValidationCom from "../components/Btn/BtnValidationCom";
import { useParams } from 'react-router-dom';


export default function BoutonValidationCom(){

    let id = useParams();

    console.log(id.idComm);

    let handlerUtilisateur = (data) =>{



        const url = `https://sae301.alwaysdata.net/api/admins/commentaires/${id.idComm}`;

        
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
        <BtnValidationCom handler={handlerUtilisateur} ></BtnValidationCom>
        </div>
    )
}