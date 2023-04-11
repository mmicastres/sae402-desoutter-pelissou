import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AlbumIcon from '@mui/icons-material/Album';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState, useEffect } from 'react';


import { Link } from "react-router-dom";

import Albums from '../classes/Albums'




export default function FormAjoutAlbum(props) {

    const date = new Date();
    let date_ajout = date.toJSON().slice(0,10);
    let nom_categorie = "Rap";
    let pseudo= "Poulet";

    const [titre, setTitre] = useState("");
    const [sortie_album, setSortie_album] = useState("");
    const [pochette, setPochette] = useState("");


    const HandleChangeTitre = (event) => setTitre(event.target.value);
    const HandleChangeSortie_album = (event) => setSortie_album(event.target.value);
    const HandleChangePochette = (event) => setPochette(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Albums(titre, date_ajout, sortie_album,pochette,nom_categorie,pseudo);
        console.log(titre);
        console.log(date_ajout);
        console.log(sortie_album);
        console.log(pochette);
        console.log(nom_categorie);
        console.log(pseudo);

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
                    <AlbumIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ajouter un Album
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
                                    id="sortie_album"
                                    label="Date de sortie de l'album"
                                    name="sortie_album"
                                    type="date"
                                    autoComplete="esortie_album"
                                    onChange={HandleChangeSortie_album}
                                    onChangeText={setSortie_album}
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
                        {/* NE PAS METTRE LE LINK FAIT BUGGER OU ALORS PREVENT DEFAULT LE BUTTON */}
                        {/* <Link to="/"> */}
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Valider
                        </Button>
                        {/* </Link> */}
                </Box>
            </Box>
        </Container>
    );
}
