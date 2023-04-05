import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import MaCard from './components/Card';

function App() {
  return (
    <div className="App">
  
      <Button variant="contained">Hello World</Button>
      <MaCard></MaCard>
      
    </div>
  );
}

export default App;



