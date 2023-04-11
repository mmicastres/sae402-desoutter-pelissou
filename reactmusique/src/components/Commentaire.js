
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import CommentaireCard from './CommentaireCard';




export default function Commentaires(data) {
    console.log(data.id_album)
    const [lCommentaires, setCommentaire] = useState([])
    const url =
        `https://sae301.alwaysdata.net/api/albums/${data.id_album}/commentaires`;

    function getCommentaires() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // console.log(dataJSON);
                setCommentaire(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getCommentaires()
    }, [])

    return (


        <div className='Commentaires'>

            {lCommentaires.map((c) =>

                <CommentaireCard commentaire={c.commentaire} date={c.date_ajout_com} note={c.note} pseudo={c.pseudo} ></CommentaireCard>

            )}

        </div>
    )

}


