import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MaCard(data) {
    console.log(data)
    // console.log(titre)
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
        <Button size="small">Voir</Button>
      </CardActions>
    </Card>
  );
  }