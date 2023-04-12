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



export default function SupressionCategories(data) {
    const [nom_categorie, setCategorie] = useState("");
    console.log(nom_categorie)

    const handleChangeCategorie = (event) => setCategorie(event.target.value);

    let handleSupprime = () => {
        let url =
            `https://sae301.alwaysdata.net/api/admins/categories/${nom_categorie}`;

        const fetchOptions = {
            method: "DELETE"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // setAlbums(dataJSON)
                // props.handler(rand);

            })
            .catch((error) => console.log(error));
            window.location.reload();


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
                {/* Using the categories fetched before in a select input */}

                <InputLabel id="demo-simple-select-label">Catégories</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nom_categorie}
                    label="Catégories"
                    onChange={handleChangeCategorie}
                >
                    {data.cats.map((c) =>
                        <MenuItem value={c.nom_categorie}>{c.nom_categorie}</MenuItem>
                    )}

                </Select>


                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSupprime}
                >
                    Supprimer
                </Button>

                {/* </Box> */}
            </Box>
        </Container>
    );
}