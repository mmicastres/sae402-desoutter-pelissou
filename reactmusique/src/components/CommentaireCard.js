import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MonBouton from './MonBouton';
import { UserContext } from '../App';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CommentaireCard(data) {
    const value = React.useContext(UserContext);
    // console.log(data);
    if (value.admin == "1") {
    return (
        <Card className={'Commentaire'}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.note}/5
                </Typography>
                <Typography variant="h5" component="div">
                    <Link to={`/utilisateur/${data.pseudo}`}>
                        <p>{data.pseudo}</p>
                    </Link>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.date}
                </Typography>
                <Typography variant="body2">
                    {data.commentaire}
                </Typography>
                <MonBouton contenu = {"supprimer"}></MonBouton>
            </CardContent>
        </Card>
    );
    }
    else{
        <Card className={'Commentaire'}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {data.note}/5
            </Typography>
            <Typography variant="h5" component="div">
                <Link to={`/utilisateur/${data.pseudo}`}>
                    <p>{data.pseudo}</p>
                </Link>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.date}
            </Typography>
            <Typography variant="body2">
                {data.commentaire}
            </Typography>
            
        </CardContent>
    </Card> 
    }
}