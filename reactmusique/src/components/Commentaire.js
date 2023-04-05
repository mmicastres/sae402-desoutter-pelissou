
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';



export default function Commentaires(){
    const [lCommentaires, setCommentaire] = useState([])
    const url =
    `https://sae301.alwaysdata.net/api/albums/2/commentaires`;

    function getCommentaires(){
        
          const fetchOptions = {
            method: "GET" // --> DELETE = suppression
            };
            fetch(url, fetchOptions)
            .then((response) => {
            return response.json();
            })
            .then((dataJSON) => {
            console.log(dataJSON);
            setCommentaire(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(()=> {
        getCommentaires()
        }, [])

    return(
        

        <div >
            
                {lCommentaires.map((t)=>
                    
                    <p>Commentaire : {t.commentaire}</p>
                    
                )}
            
        </div>
    )

}


       
