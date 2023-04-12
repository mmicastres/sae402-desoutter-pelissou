import FormConnexion from "../../components/Forms/FormConnexion"
import { useState, useEffect } from 'react';
import React from "react";
import { UserContext } from "../../App"
// import { userAdmin } from "../../App"

// Connexion form request function
export default function FormulaireConnexion() {
    // const [utilisateur, setUtilisateur]
    const [utilisateur, setUtilisateur] = useState("")
    const value = React.useContext(UserContext);
    

    
    let handlerUtilisateur = (data) => {

        const url = `https://sae301.alwaysdata.net/api/connexion`;

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
                setUtilisateur(dataJSON[0])
                console.log(dataJSON[0].pseudo)
                value.pseudo = dataJSON[0].pseudo
                value.admin = dataJSON[0].admin
                console.log(value)
                // userContext = React.createContext(dataJSON[0].pseudo);
                // userAdmin = React.createContext(dataJSON[0].admin);
                // const value = React.useContext(UserContext);
                // console.log(value)
                // console.log(userContext._currentValue)
                // console.log(userAdmin._currentValue)
                // console.log(userContext._currentValue)

            })
            .catch((error) => console.log(error));

            // window.location.replace(
            //     "/"
            //   );
        
        
        


    }


    return (
        <FormConnexion handler={handlerUtilisateur} ></FormConnexion>
    )
}