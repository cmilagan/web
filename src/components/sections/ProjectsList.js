import React from 'react'
import loopmania from '../../images/loopmania.PNG'
import website from '../../images/personalweb.PNG'
import stimpact from '../../images/stimpact.jpg'
import flockr from '../../images/flockr.png'
import flatpack from '../../images/flatpack.PNG'
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProjectsList.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

const ProjectsList = () => {
    const history = useHistory();

    return (
        <div className="projects_page_container">
            <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={loopmania}
                    alt="loopmania"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Loopmania
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Group project videogame created using OOP (Java) and JFX
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" component={Link} to="/post/1629640800">View Project</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={website}
                    alt="loopmania"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Personal Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Personal website created with HTML/CSS/JavaScript (REACT)
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to="/post/1629554400">View Project</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={stimpact}
                    alt="loopmania"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    StimPact
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Developed a neuralstimulator to be used on animals (C/Python/Kivy)
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to="/post/1629900000">View Project</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={flockr}
                    alt="loopmania"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Flockr
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Developed the backend of a communication platform similar to slack/discord (Python/Flask)
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to="/post/1629900000">View Project</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={flatpack}
                    alt="loopmania"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Modular Flatpack
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Developed modular furniture targeting the problem of waste.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to="/post/1629813600">View Project</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectsList