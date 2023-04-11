import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UtilisateurCard from '../components/UtilisateurCard';


export default function PageUtilisateur(){
    let pseudo = useParams()
    return(
        <div className="PageUti">
            <h2>{pseudo.pseudo}</h2>
            <UtilisateurCard></UtilisateurCard>
        </div>
    )
}