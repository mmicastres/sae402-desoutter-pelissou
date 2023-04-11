import FormConnexion from "../Views/FormConnexion"
import { useState, useEffect } from 'react';
import React from "react";

export default function FormulaireConnexion() {

    let handlerUtilisateur = (data) => {
        
        let pseudo = data.pseudo;


        const url = `https://sae301.alwaysdata.net/api/utilisateurs/${pseudo}`;

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

        // FILER LES INFOS 
        
    }


    return (
        <FormConnexion handler={handlerUtilisateur} ></FormConnexion>
    )
}