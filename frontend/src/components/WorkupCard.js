import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

export default function WorkupCard({ workup }) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 300, margin: 2 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`/static/images/workups${workup.path}.png`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {workup.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {workup.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => navigate(`.${workup.path}`)}>View</Button>
                    <Button size="small">Start</Button>
                </CardActions>
            </Card>
        </React.Fragment>

  );
}