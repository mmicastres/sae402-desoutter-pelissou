import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import MaCard from './components/Card';
import NavBar from './Views/NavBar';
import ProfilView from './Views/ProfilView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path="/utilisateurs" element={<ProfilView />} />
      <Route path="/form" element={<ProfilView />}/>
      </Routes>
      <Button variant="contained">Hello World</Button>
      <MaCard></MaCard>
      </BrowserRouter>
      
    </div>
  );
}

export default App;



