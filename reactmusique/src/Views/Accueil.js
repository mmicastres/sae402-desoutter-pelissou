import AlbumAccueil from "../components/AlbumAccueil"
import { Button } from "@mui/material"
import MonBouton from "../components/MonBouton"

export default function Accueil() {
    return (
        <div className="Accueil">
            {/* <p>Salut</p> */}
            <AlbumAccueil></AlbumAccueil>
            {/* <Button sx={styleBout} className="BoutAleatoire" variant="contained">Album aléatoire</Button> */}
            <MonBouton contenu = {"Album aléatoire"}></MonBouton>
        </div>

    )
}