import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import NavBar from './Views/NavBar';
import ProfilView from './Views/ProfilView';
import AlbumSpe from './components/AlbumSpe';
import Titres from './components/Titres';
import FormIdent from './Views/FormInscript';
import FormInscript from './Views/FormInscript';
import Accueil from './Views/Accueil';
import GestionCategorie from './Views/GestionCategories'
import FormulaireIncription from './components/FormulaireInscription';
import FormulaireConnexion from './components/FormulaireConnexion';
import Recherche from './Views/Recherche';


// Hello World function
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<ProfilView />} />
          <Route path="/form" element={<ProfilView />} />
          <Route path="/album/:id" element={<AlbumSpe />} />
          <Route path="/recherche" element={<Recherche/>} />
          <Route path="/inscription" element={<FormulaireIncription />}/>
          <Route path="/categories" element={<GestionCategorie />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



