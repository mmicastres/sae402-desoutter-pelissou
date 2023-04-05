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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/utilisateurs" element={<ProfilView />} />
          <Route path="/form" element={<ProfilView />} />
          <Route path="/album" element={<Albums />} />
          <Route path="/form" element={<FormInscript />}/>
          <Route path="/categories" element={<GestionCategorie />} />
          {/* <Route path="/categories" element={<FormInscript />}> */}
            
        </Routes>
        {/* <Button variant="contained">Hello World</Button> */}
      <NavBar></NavBar>
      <Routes>
      <Route path="/utilisateurs" element={<ProfilView />} />
      <Route path="/profil" element={<ProfilView />}/>
      <Route path="/album" element={<Albums />}/>
      <Route path="/inscr" element={<FormulaireIncription/>}/>
      </Routes>
      {/* <Button variant="contained">Hello World</Button> */}
      </BrowserRouter>

      <div className='listeAlbum'>
      
      {/* <div className='listeAlbum'> */}
        {/* <MaCard></MaCard>
        <MaCard></MaCard> */}
        {/* <Albums></Albums> */}
        {/* <Titres></Titres> */}

      </div>
      {/* <Albums></Albums> */}
      {/* <Titres></Titres> */}
      
    {/* </div> */}

      {/* <Button variant="contained">Hello World</Button> */}
      {/* <div className='listeAlbum'>
        <MaCard></MaCard>
        <MaCard></MaCard>
      <Albums></Albums>
    </div> */}
    </div>
  );
}

export default App;



