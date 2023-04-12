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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import { Link } from "react-router-dom";

import Commentaires from "../../classes/Commentaires";




export default function FormAjoutCommentaire(props) {

    let id = useParams();

    // Instancing all needed variables to create a new Album

    let pseudo = "Poulet";
    let id_album = id.idAlbum;
    let date = new Date();
    let date_ajout_com = date.toJSON().slice(0, 10);

    const [commentaire, setCommentaire] = useState("");
    const [note, setNote] = useState(1);


    const HandleChangeCommentaire = (event) => setCommentaire(event.target.value);
    const HandleChangeNote = (event) => setNote(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Commentaires(commentaire,note, date_ajout_com,pseudo, id_album);
        console.log(commentaire);
        console.log(note);
        console.log(date_ajout_com);
        console.log(pseudo);
        console.log(id_album);
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
                    Commenter l'Album
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <InputLabel id="demo-simple-select-label">Note</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={note}
                            label="Noter l'Album"
                            onChange={HandleChangeNote}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="commentaire"
                                label="Commenter l'Album"
                                name="commentaire"
                                autoComplete="family-name"
                                value={commentaire}
                                onChange={HandleChangeCommentaire}
                                onChangeText={setCommentaire}
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
