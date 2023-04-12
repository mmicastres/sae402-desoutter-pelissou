import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import NavBar from './Views/NavBar';
import ProfilView from './Views/ProfilView';
import AlbumSpe from './Views/AlbumSpe';
import Accueil from './Views/Accueil';
import GestionCategorie from './Views/GestionCategories'
import FormulaireIncription from './Views/Formulaires/FormulaireInscription';
import FormulaireConnexion from './Views/Formulaires/FormulaireConnexion';
import FormulaireAjoutAlbum from './Views/Formulaires/FormulaireAjoutAlbum';
import FormulaireAjoutTitre from './Views/Formulaires/FormulaireAjoutTitre';
import FormulaireAjoutAnecdote from './Views/Formulaires/FormulaireAjoutAnecdote';
import FormulaireAjoutCom from './Views/Formulaires/FormulaireAjoutCom';
import FomulaireAjoutCategorie from './Views/Formulaires/FormulaireAjoutCategorie';
import BoutonValidationComs from './Views/BoutonsValidation/BoutonValidationCom';
import BoutonValidationAnecdote from './Views/BoutonsValidation/BoutonValidationAnecdote';
import BoutonValidationTitre from './Views/BoutonsValidation/BoutonValidationTitre';
import BoutonValidationAlbum from './Views/BoutonsValidation/BoutonValidationAlbum';
import FormulaireModifUtilisateur from './Views/FormulairesModif/FormulaireModifUtilisateur';
import Recherche from './Views/Recherche';
import PageTitre from './Views/PageTitre';
import PageUtilisateur from './Views/PageUtilisateur';
import AlbumParCategorie from './Views/RechercheParCategorie';
import PageArtiste from './Views/PageArtiste';


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
          <Route path="/admin/categories" element={<GestionCategorie />} />
          <Route path="/categories/:nomCat/albums" element={<AlbumParCategorie />} />
          <Route path="/album/:idAlbum/titre/:idTitre" element={<PageTitre />} />
          <Route path="/artiste/:Pseudo/albums/:idAlbum" element={<FormulaireAjoutTitre />} />
          <Route path="/artistes/:Pseudo/titres/:idTitre/anecdotes" element={<FormulaireAjoutAnecdote />} />
          <Route path="/albums/:idAlbum/commentaires" element={<FormulaireAjoutCom/>}/>
          <Route path="/admins/commentaires/:idComm"element={<BoutonValidationComs/>}/>
          <Route path="/admins/anecdotes/:idAnec"element={<BoutonValidationAnecdote/>}/>
          <Route path="/admins/albums/:idAlbum"element={<BoutonValidationAlbum/>}/>
          <Route path="/admins/titres/:idTitre"element={<BoutonValidationTitre/>}/>
          <Route path="/utilisateurs/:Pseudo"element={<FormulaireModifUtilisateur/>}/>
          <Route path="/utilisateur/:pseudo" element={<PageUtilisateur />} />
          <Route path="/artiste/:pseudo" element={<PageArtiste />} />
          <Route path="/categories/ajout" element={<FomulaireAjoutCategorie/>}/>
          <Route path="/form-ajout-album" element={<FormulaireAjoutAlbum/>}/> 
          <Route path="/utilisateur/:pseudo" element={<PageUtilisateur />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



