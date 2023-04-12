import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Titres from '../../classes/Titres'




export default function BtnValidationTitre(props) {

    // Instancing all needed variables to validate the Single

    const valide = 1;

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Titres(null,null,null,null,null,valide);
        props.handler(data);



    }

    return (
        <Container component="main" maxWidth="xs">
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        value="1"
                        onClick={handleSubmit}
                    >
                        Valider
                    </Button>

        </Container>
    );
}
