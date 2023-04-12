import FormConnexion from "../../components/Forms/FormConnexion"
import { useState, useEffect } from 'react';
import React from "react";


// Connexion form request function
export default function FormulaireConnexion() {

    
    let handlerUtilisateur = (data) => {
        console.log(data.pseudo);
        console.log(data.mdp);

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
                const utilisateur = React.createContext(dataJSON.pseudo);
                const admin = React.createContext(dataJSON.admin);
                console.log(dataJSON);

            })
            .catch((error) => console.log(error));

            window.location.replace(
                "/"
              );
        
        
        


    }


    return (
        <FormConnexion handler={handlerUtilisateur} ></FormConnexion>
    )
}