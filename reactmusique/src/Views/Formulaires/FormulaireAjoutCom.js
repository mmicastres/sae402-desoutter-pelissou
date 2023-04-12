import FormAjoutCom from "../../components/Forms/FormAjoutCom";
import { useParams } from 'react-router-dom';


export default function FormulaireAjoutAlbum(){
    let id = useParams();
    console.log(id.idAlbum)
    
    let handlerUtilisateur = (data) =>{
        
        const url = `https://sae301.alwaysdata.net/api/albums/${id.idAlbum}/commentaires`;
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON()) // les nvelles valeurs du produit
        };
        console.log(data.toJSON())
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
        <FormAjoutCom handler={handlerUtilisateur} ></FormAjoutCom>
        </div>
    )
}