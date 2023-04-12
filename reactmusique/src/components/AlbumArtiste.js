import { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';


export default function AlbumArtiste(data){
    console.log(data)
    const [lAlbums, setAlbums] = useState([])
    let url =
        `https://sae301.alwaysdata.net/api/artistes/${data.pseudo}/albums`;
        

    function AlbumArtiste() {

        const fetchOptions = {
            method: "GET" 
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setAlbums(dataJSON)
                // console.log(dataJSON)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        AlbumArtiste()

    }, [data])



    return (

        <div className='AlbumAccueil'>
            {lAlbums.map((t) =>
                <AlbumCard id={t.id_album} src={t.pochette} titre={t.titre}></AlbumCard>
            )}
        </div>
    )
}