import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


// Card composant from
export default function CategorieCard(data) {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/82b7b249-4b20-4769-beac-09d13a318a7c"
                title= {data.cat}
            />
            <CardContent sx={{ width: 220 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.cat}
                </Typography>

            </CardContent>
            <CardActions>
                <Link to={`/categories/${data.cat}/albums`}>
                    <Button size="small">Voir</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
