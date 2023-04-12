import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function TitreCard(data) {
    console.log(data)
    const test = React.createContext("admi");
    // console.log(test._currentValue)
    const [expanded, setExpanded] = React.useState(false);

   

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if ( test._currentValue == "admin") {
        
        return (
            <div className='InfoUtilisateur'>
                <Card sx={{ width: 1/3 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    
                            </Avatar>
                        }
                            
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="{data.titre}"
                        subheader={data.date}
                    />
                </Card>
            </div>
        );
    }
    else{
        return (
            <div className='InfoUtilisateur'>
                <Card sx={{ width: 1/3 }}>
                <Link to={`/album/${data.idAlbum}/titre/${data.idTitre}`}>
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    
                        //     </Avatar>
                        // }
                        
                          title={data.titre}
                          
                    />
                    </Link>
                </Card>
            </div>
        );
    }

    
}