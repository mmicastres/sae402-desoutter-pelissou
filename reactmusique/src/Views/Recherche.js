import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import Categories from "../components/Categorie";
import FormControl from '@mui/material/FormControl';



import { Link } from "react-router-dom";

import Utilisateurs from '../classes/Utilisateurs'
import MonBouton from "../components/MonBouton";

// Search artist, album, title function
export default function Recherche() {
  const [texte, setTexte] = useState("");
  const handlerChange = (event) => setTexte(event.target.value);

  const handleSubmit = (event) => {
    console.log("uifzej")
    event.preventDefault();
    console.log(texte);
    // props.handler(texte);
  };
  const handleClick = (event) => {
    event.preventDefault();
    console.log(texte);
    // props.handler(texte);
  };



  return (
    <div className="BarreRecherche" >
      <h2>Recherche</h2>
      <Divider sx={{ width: 3 / 4 }}></Divider>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <div className="ChampRecherche">
        <FormControl onSubmit={handleSubmit}>
            <Grid>
              <Grid>
                <TextField
                  value={texte}
                  onChange={handlerChange}
                  fullWidth
                  id="recherche"
                  label="Rechercher un artiste, album, titre ..."
                  name="recherche"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <div className="divBoutRecherche">
              {/* <MonBouton 
              type="submit" 
              contenu={"Valider"}
              onClick={handleClick}>
              </MonBouton> */}
              <Button onClick={handleClick} variant="contained">Rechercher</Button>
              {/* <input type="submit" value="Submit" /> */}
            </div>
          </FormControl>
        </div>
      </Box>
      <Categories></Categories>
    </div>
  )
}
