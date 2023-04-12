import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import NavBar from './Views/NavBar';
import ProfilView from './Views/ProfilView';
import AlbumSpe from './Views/AlbumSpe';
import Titres from './components/Titres';
import Accueil from './Views/Accueil';
import GestionCategorie from './Views/GestionCategories'
import FormulaireIncription from './components/FormulaireInscription';
import FormulaireConnexion from './components/FormulaireConnexion';
import FormulaireAjoutAlbum from './components/FormulaireAjoutAlbum';
import FormulaireAjoutTitre from './components/FormulaireAjoutTitre';
import FormulaireAjoutAnecdote from './components/FormulaireAjoutAnecdote';
import FormulaireAjoutCom from './components/FormulaireAjoutCom';
import FomulaireAjoutCategorie from './components/FormulaireAjoutCategorie';
import Recherche from './Views/Recherche';
import PageTitre from './Views/PageTitre';
import PageUtilisateur from './Views/PageUtilisateur';
import AlbumParCategorie from './Views/RechercheParCategorie';


// Hello World function
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<ProfilView />} />
          <Route path="/form" element={<ProfilView />} />
          <Route path="/album/:id" element={<AlbumSpe />} />
          <Route path="/recherche" element={<Recherche/>} />
          <Route path="/login" element={<FormulaireConnexion />}/>
          <Route path="/inscription" element={<FormulaireIncription/>}/>
          <Route path="/categories" element={<GestionCategorie />} />
          <Route path="/categories/:nomCat/albums" element={<AlbumParCategorie />} />
          <Route path="/album/:idAlbum/titre/:idTitre" element={<PageTitre />} />
          <Route path="/artiste/:Pseudo/albums/:idAlbum" element={<FormulaireAjoutTitre />} />
          <Route path="/artistes/:Pseudo/titres/:idTitre/anecdotes" element={<FormulaireAjoutAnecdote />} />
          <Route path="/albums/:idAlbum/commentaires" element={<FormulaireAjoutCom/>}/>
          <Route path="/categories/ajout" element={<FomulaireAjoutCategorie/>}/>
          <Route path="/form-ajout-album" element={<FormulaireAjoutAlbum/>}/> 
          <Route path="/utilisateur/:pseudo" element={<PageUtilisateur />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



