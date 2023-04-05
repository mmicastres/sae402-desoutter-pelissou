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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path="/utilisateurs" element={<ProfilView />} />
      <Route path="/form" element={<ProfilView />}/>
      <Route path="/album" element={<Albums />}/>
      <Route path="/form" element={<FormInscript />}>
      </Route>
      </Routes>
      {/* <Button variant="contained">Hello World</Button> */}
      </BrowserRouter>
      
      <div className='listeAlbum'>
        {/* <MaCard></MaCard>
        <MaCard></MaCard> */}
      {/* <Albums></Albums> */}
      {/* <Titres></Titres> */}
      
    </div>

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



