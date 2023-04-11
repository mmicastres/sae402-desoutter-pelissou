import AlbumAccueil from "../components/AlbumAccueil"
import { Button } from "@mui/material"

export default function Accueil() {
    return (
        <div className="Accueil">
            {/* <p>Salut</p> */}
            <AlbumAccueil></AlbumAccueil>
            <Button variant="contained">Album aléatoire</Button>
        </div>
    )
}