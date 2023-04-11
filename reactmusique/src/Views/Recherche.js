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


import { Link } from "react-router-dom";

import Utilisateurs from '../classes/Utilisateurs'
import MonBouton from "../components/MonBouton";

// Search artist, album, title function
export default function Recherche() {

  return (
    <div className="BarreRecherche" >
      <h2>Recherche</h2>
      <Divider sx={{ width: 3 / 4 }}></Divider>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <div className="ChampRecherche">
          <Grid>
            <Grid>
              <TextField
                fullWidth
                id="recherche"
                label="Rechercher un artiste, album, titre ..."
                name="recherche"
                autoComplete="family-name"
              />
            </Grid>
          </Grid>
          <div className="divBoutRecherche">
            <MonBouton contenu={"Valider"}></MonBouton>
          </div>
        </div>
      </Box>
      <Categories></Categories>
    </div>
  )
}
