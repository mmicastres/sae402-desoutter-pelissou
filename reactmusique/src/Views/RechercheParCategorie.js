import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import AlbumCard from "../components/AlbumCard"

export default function AlbumParCategorie(){
    let cat = useParams()
    console.log('fjuez')

    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/categories/${cat.nomCat}/albums`;
        

    function getAlbums() {

        const fetchOptions = {
            method: "GET" 
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setAlbums(dataJSON)

            })
            .catch((error) => console.log(error));


    }

    useEffect(() => {
        getAlbums()
    }, [])

    return(
        <div className='AlbumCat'>
            {lAlbums.map((t) =>
                <AlbumCard id={t.id_album} src={t.pochette} titre={t.titre}></AlbumCard>
            )}
        </div>
    )

}