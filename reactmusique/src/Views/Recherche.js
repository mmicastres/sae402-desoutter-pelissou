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

export default function Recherche(){

    return(
<div className="BarreRecherche" >
<Box component="form" noValidate sx={{ mt: 3 }}>
<Grid container spacing={2}>
  <Grid item xs={6}>
    <TextField
      fullWidth
      id="pseudo"
      label="Rechercher un artiste, album, titre ..."
      name="pseudo"
      autoComplete="family-name"
      />
  </Grid>
</Grid>
<Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 , xs:6}}
>
  Valider
</Button>
<Grid container justifyContent="flex-end">
  <Link to="/inscription">
    <Grid item>Vous n'avez pas de compte ? Inscription</Grid>
  </Link>
</Grid>
</Box>
</div>
)
}


// import { useState } from "react";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";

// export default function Recherche() {
//     return (
//         <div className="BarreRecherche">
//             <h1>Recherche</h1>
//             <form>
//                 <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                         <TextField
//                             fullWidth
//                             id="pseudo"
//                             label="Rechercher un artiste, album, titre ..."
//                             name="pseudo"
//                             autoComplete="family-name"
//                         />
//                     </Grid>
//                 </Grid>
//             </form>
//         </div>
//     )
// }