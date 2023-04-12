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

import { useParams } from 'react-router-dom';


import { Link } from "react-router-dom";

import Utilisateurs from '../../classes/Utilisateurs'




export default function FormAjoutAlbum(props) {

    let id = useParams();

    // Importing all the categories and fetching them all to use them later
    
    const url =
    `https://sae301.alwaysdata.net/api/utilisateurs/${id.idPseudo}`;
    
    const [lutilisateur, setUtilisateur] = useState([])

    function getUtilisateurs() {

        const fetchOptions = {
            method: "GET" // --> DELETE = suppression
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setUtilisateur(dataJSON)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUtilisateurs()
    }, [])

    // Instancing all needed variables to create a new Album

    const [mdp, setMdp] = useState("");
    const [pp, setPp] = useState("");


    const HandleChangeMdp = (event) => setMdp(event.target.value);
    const HandleChangePp = (event) => setPp(event.target.value);
    // const handleChangeCategorie = (event) => setCategorie(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Utilisateurs(null,null, mdp, null,pp);
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
                    Modifier son profil
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="mdp"
                                label="Mot de passe"
                                name="mdp"
                                placeholder={lutilisateur.mdp}
                                value={mdp}
                                onChange={HandleChangeMdp}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="pp"
                                label="Changer votre photo de profil"
                                name="pp"
                                placeholder={lutilisateur.pp}
                                value={pp}
                                onChange={HandleChangePp}
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
