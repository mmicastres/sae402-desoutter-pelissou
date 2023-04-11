import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from 'react';
import Categories from "../components/Categorie";
import ListeRecherche from "../components/ListeRecherche";
import RechercheForm from "../components/RechercheForm";




import { Link } from "react-router-dom";

import Utilisateurs from '../classes/Utilisateurs'
import MonBouton from "../components/MonBouton";

// Search artist, album, title function
export default function Recherche() {

  const [recherche, setRecherche] = useState("");
  let handleRecherche = (v) => setRecherche(v);


  return (
    <div className="PageRecherche" >
      <h2>Recherche</h2>
      <RechercheForm handler={handleRecherche}></RechercheForm>
      <ListeRecherche precherche={recherche}></ListeRecherche>
      <Categories></Categories>
    </div>
  )
}
