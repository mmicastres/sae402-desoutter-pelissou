import FormAjoutAlbum from "../../components/Forms/FormAjoutAlbum"

export default function FormulaireAjoutAlbum(){

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/albums`;

        
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
        <FormAjoutAlbum handler={handlerUtilisateur} ></FormAjoutAlbum>
        </div>
    )
}