import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Albums from '../../classes/Albums'




export default function BtnValidationTitre(props) {

    // Instancing all needed variables to create a new Album

    const valide = 1;

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new Albums(null,null,null,null,null,null,valide);
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
