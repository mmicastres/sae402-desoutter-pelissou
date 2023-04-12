import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';


import { Link } from "react-router-dom";

import Categories from "../classes/Categories";




export default function FormAjoutCategorie(props) {

    let id = useParams();

    // Instancing all needed variables to create a new Album

    let pseudo = id.Pseudo;
    let id_titre = id.idTitre;

    const [nom_categorie, setCategorie] = useState("");

    const HandleChangeCategorie = (event) => setCategorie(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Categories(nom_categorie);
        console.log(nom_categorie);
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
                    <HistoryEduIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ajouter une anecdote
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="nom_categorie"
                                label="Nouvelle Catégorie"
                                name="nom_categorie"
                                autoComplete="family-name"
                                value={nom_categorie}
                                onChange={HandleChangeCategorie}
                                onChangeText={setCategorie}
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
