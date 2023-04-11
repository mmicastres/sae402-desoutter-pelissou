import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function AlbumCard(data) {
    // console.log(data)
    // console.log(data.id)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={data.pochette}
                title="green iguana"
            />
            <CardContent sx={{ width: 220 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.titre}
                </Typography>

            </CardContent>
            <CardActions>
                <Link to={`/album/${data.id}`}>
                    <Button size="small">Voir</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
