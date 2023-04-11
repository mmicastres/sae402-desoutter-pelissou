import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import Categories from "../components/Categorie";
import ListeRecherche from "../components/ListeRecherche";

export default function RechercheForm(props) {

    const [texte, setTexte] = useState("");
    const handlerChange = (event) => setTexte(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handler(texte);
    };
    const handleClick = (event) => {
        event.preventDefault();
        props.handler(texte);
        
    };
    return (
        <div className="BarreRecherche" >
            <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 3 }}>
                <div className="ChampRecherche">
                    <Grid>
                        <Grid>
                            <TextField
                                value={texte}
                                onChange={handlerChange}
                                fullWidth
                                id="recherche"
                                label="Rechercher un artiste, album, titre ..."
                                name="recherche"
                                autoComplete="family-name"
                            />
                        </Grid>
                    </Grid>
                    <div className="divBoutRecherche">
                        {/* <MonBouton 
              type="submit" 
              contenu={"Valider"}
              onClick={handleClick}>
              </MonBouton> */}
                        <Button onClick={handleClick} variant="contained">Rechercher</Button>
                        {/* <input type="submit" value="Submit" /> */}
                    </div>
                </div>
            </Box>
        </div>
    )
}