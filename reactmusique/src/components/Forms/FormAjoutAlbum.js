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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState, useEffect } from 'react';


import { Link } from "react-router-dom";

import Albums from '../../classes/Albums'




export default function FormAjoutAlbum(props) {

    // Importing all the categories and fetching them all to use them later
    
    const [lCategorie, setCategories] = useState([])
    const url =
        `https://sae301.alwaysdata.net/api/categories`;

    function getCategories() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setCategories(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getCategories()
    }, [])

    // Instancing all needed variables to create a new Album

    const date = new Date();
    let date_ajout = date.toJSON().slice(0, 10);
    let pseudo = "Poulet";

    const [titre, setTitre] = useState("");
    const [sortie_album, setSortie_album] = useState("");
    const [pochette, setPochette] = useState("");
    const [nom_categorie, setCategorie] = useState("");


    const HandleChangeTitre = (event) => setTitre(event.target.value);
    const HandleChangeSortie_album = (event) => setSortie_album(event.target.value);
    const HandleChangePochette = (event) => setPochette(event.target.value);
    const handleChangeCategorie = (event) => setCategorie(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Albums(titre, date_ajout, sortie_album, pochette, nom_categorie, pseudo);
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

                    {/* Using the categories fetched before in a select input */}

                    <InputLabel id="demo-simple-select-label">Catégories</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={nom_categorie}
                        label="Catégories"
                        onChange={handleChangeCategorie}
                    >   
                        {lCategorie.map((c) =>
                            <MenuItem value={c.nom_categorie}>{c.nom_categorie}</MenuItem>
                            // <p>{t.nom_categorie}</p>

                        )}

                    </Select>


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
