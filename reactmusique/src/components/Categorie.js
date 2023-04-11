
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import CategorieCard from './CategorieCard';



export default function Categories(){
    const [lCategorie, setCategories] = useState([])
    const url =
    `https://sae301.alwaysdata.net/api/categories`;

    function getCategories(){
        
          const fetchOptions = {
            method: "GET" // --> DELETE = suppression
            };
            fetch(url, fetchOptions)
            .then((response) => {
            return response.json();
            })
            .then((dataJSON) => {
            console.log(dataJSON);
            setCategories(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        getCategories()
        }, [])

    return(
        

        <div >
            
                {lCategorie.map((c)=>
                    
                    <CategorieCard cat = {c.nom_categorie}></CategorieCard>
                    // <p>{t.nom_categorie}</p>
                    
                )}
            
        </div>
    )

}


       
