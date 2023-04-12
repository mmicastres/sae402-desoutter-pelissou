import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';


import { Link } from "react-router-dom";

import Titres from "../../classes/Titres";




export default function FormAjoutTitre(props) {

    let id = useParams();

    // Instancing all needed variables to create a new Album

    let pseudo = id.Pseudo;
    let id_album = id.idAlbum;

    const [titre, setTitre] = useState("");
    const [paroles, setParoles] = useState("");
    const [pochette, setPochette] = useState("");


    const HandleChangeTitre = (event) => setTitre(event.target.value);
    const HandleChangeParoles = (event) => setParoles(event.target.value);
    const HandleChangePochette = (event) => setPochette(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Titres(titre, paroles, pochette,pseudo, id_album);
        console.log(pseudo);
        console.log(id_album);
        console.log(titre);
        console.log(paroles);
        console.log(pochette);
        props.handler(data);

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
                    <MusicNoteIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ajouter un Titre
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="titre"
                                label="Titre"
                                name="titre"
                                autoComplete="family-name"
                                value={titre}
                                onChange={HandleChangeTitre}
                                onChangeText={setTitre}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="paroles"
                                label="Paroles du titre"
                                name="paroles"
                                onChange={HandleChangeParoles}
                                onChangeText={setParoles}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="pochette"
                                label="Pochette de l'Album"
                                type="text"
                                id="pochette"
                                value={pochette}
                                onChange={HandleChangePochette}
                                onChangeText={setPochette}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Valider
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}
