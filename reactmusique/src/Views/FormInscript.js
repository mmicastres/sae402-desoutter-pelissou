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
import Connecte from "../Connexion";


import { Link } from "react-router-dom";

import Utilisateurs from '../classes/Utilisateurs'




export default function FormInscription(props) {
  
  
  const [pseudo, setPseudo] = useState("");
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");


  const HandleChangePseudo = (event) => setPseudo(event.target.value);
  const HandleChangeMail = (event) => setMail(event.target.value);
  const HandleChangeMdp = (event) => setMdp(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();
    let data = new Utilisateurs(pseudo, mail, mdp);
    console.log(pseudo);
    console.log(mail);
    console.log(mdp);

    props.handler(data);

    
    
  }
  
  console.log(Connecte);
  Connecte = true;




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
          S'inscrire
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
                id="email"
                label="Mail"
                name="email"
                type="email"
                autoComplete="email"
                onChange={HandleChangeMail}
                onChangeText={setMail}
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
                onChange={HandleChangeMdp}
                onChangeText={setMdp}
              />
            </Grid>
          </Grid>
          <Link to="/">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Valider
          </Button>
            </Link>
          <Grid container justifyContent="flex-end">
            <Link to="/connexion">
              <Grid item>Vous avez un compte ? Connexion</Grid>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
