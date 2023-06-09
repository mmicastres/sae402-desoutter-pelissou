import BtnValidationTitre from "../../components/Btn/BtnValidationTitre";
import { useParams } from 'react-router-dom';


export default function BoutonValidationCom(){

    let id = useParams();

    console.log(id.idAlbum);

    let handlerUtilisateur = (data) =>{



        const url = `https://sae301.alwaysdata.net/api/admins/albums/${id.idAlbum}`;

        
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
        <BtnValidationTitre handler={handlerUtilisateur} ></BtnValidationTitre>
        </div>
    )
}