import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import MaCard from './components/Card';
import NavBar from './Views/NavBar';
import ProfilView from './Views/ProfilView';
import Albums from './components/Album';
import Titres from './components/Titres';
import FormIdent from './Views/FormInscript';
import FormInscript from './Views/FormInscript';
import GestionCategorie from './Views/GestionCategories'
import FormulaireIncription from './components/FormulaireInscription';
import FormulaireConnexion from './components/FormulaireConnexion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/profil" element={<ProfilView />} />
          <Route path="/form" element={<ProfilView />} />
          <Route path="/album" element={<Albums />} />
          <Route path="/inscription" element={<FormulaireIncription />}/>
          <Route path="/connexion" element={<FormulaireConnexion />}/>
          <Route path="/categories" element={<GestionCategorie />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



