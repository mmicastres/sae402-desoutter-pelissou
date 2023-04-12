import FormAjoutCategorie from "../../components/Forms/FormAjoutCategorie";


export default function FormulaireAjoutCategorie(){

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/categories/ajout`;

        
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
            window.location.reload();
        })
        .catch((error) => console.log(error));
    };

    

    return(
        <div className="FormulaireConnexion">
        <FormAjoutCategorie handler={handlerUtilisateur} ></FormAjoutCategorie>
        </div>
    )
}