import { Button } from "@mui/material"

export default function MonBouton(data){
    const styleBout = {
        "&:hover": {
            backgroundColor: "rgba(103, 80, 164, 0.9)",
        },backgroundColor: "rgba(103, 80, 164, 1)"
    };

    return(
        <Button sx={styleBout} variant="contained">{data.contenu}</Button>
    )
}