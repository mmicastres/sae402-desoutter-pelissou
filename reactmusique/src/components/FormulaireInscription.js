import FormInscription from "../Views/FormInscript"

export default function FormulaireIncription(){

    let handlerUtilisateur = (data) =>{
        const url = `https://sae301.alwaysdata.net/api/utilisateurs`;

        
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
        <FormInscription handler={handlerUtilisateur} ></FormInscription>
    )
}