import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import MaCard from './components/Card';
import NavBar from './Views/NavBar';
import Albums from './components/Album';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Button variant="contained">Hello Worl</Button>
      <h1>Bonjour</h1>
      <div className='listeAlbum'>
        <MaCard></MaCard>
        <MaCard></MaCard>

      </div>
      <Albums></Albums>

    </div>
  );
}

export default App;



