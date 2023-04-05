import {useState, useEffect} from 'react';

export default function ProfilView() {

    const [utilisateurs, setUtilisateurs] = useState([]);

    const apiKey = "Sid"
    const url = "https://sae301.alwaysdata.net/api/utilisateurs/" + apiKey

    const fetchOptions = { method: "GET" };
    useEffect(() => {
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setUtilisateurs(dataJSON[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    }