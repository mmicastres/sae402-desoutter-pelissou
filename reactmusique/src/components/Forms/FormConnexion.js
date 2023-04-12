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

import {useState, useEffect} from 'react';


import { Link } from "react-router-dom";

import Utilisateurs from '../classes/Utilisateurs'




export default function FormConnexion(props) {
  
  
  const [pseudo, setPseudo] = useState("");
  const [mdp, setMdp] = useState("");


  const HandleChangePseudo = (event) => setPseudo(event.target.value);
  const HandleChangeMdp = (event) => setMdp(event.target.value);



  const handleSubmit = (event) => {
    event.preventDefault();
    let data = new Utilisateurs(pseudo,null, mdp);
    props.handler(data);
    console.log(data);
  }
  




  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="pseudo"
                label="Pseudo"
                name="pseudo"
                autoComplete="family-name"
                value={pseudo}
                onChange={HandleChangePseudo}
                onChangeText={setPseudo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
                value={mdp}
                onChange={HandleChangeMdp}
                onChangeText={setMdp}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Valider
          </Button>
          <Grid container justifyContent="flex-end">
            <Link to="/inscription">
              <Grid item>Vous n'avez pas de compte ? Inscription</Grid>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
