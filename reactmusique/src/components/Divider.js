import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export default function ListDividers(data) {
    // console.log(data.listTitre[0].titre)
    return (
        <div>
            <p>Titres :</p>
            {data.listTitre.map((t) =>
                <Link to={`/album/${t.id_album}/titre/${t.id_titre}`}>
                    <List component="nav" aria-label="mailbox folders">


                        <ListItem button>
                            <ListItemText primary={t.titre} />
                        </ListItem>
                        <Divider />
                    </List>
                </Link>
            )}
        </div>

        //   <ListItem button>
        //     <ListItemText primary="Inbox" />
        //   </ListItem>
        //   <Divider />
        //   <ListItem button divider>
        //     <ListItemText primary="Drafts" />
        //   </ListItem>
        //   <ListItem button>
        //     <ListItemText primary="Trash" />
        //   </ListItem>
        //   <Divider light />
        //   <ListItem button>
        //     <ListItemText primary="Spam" />
        //   </ListItem>

    );
}