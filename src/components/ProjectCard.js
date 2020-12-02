import React, { useState } from 'react'
import { Grid, Card, CardContent, CardHeader, CardMedia, Typography, CardActions, IconButton, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ReactCardFlip from 'react-card-flip';
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    root: {
        minHeight: 450,
        padding: 5
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    flipButton: {
        marginLeft: "auto",
        color: "grey",
    },
    actionButton: {
        alignItems: "flex-end"
    }
})

export default function ProjectCard(props) {

    const classes = useStyles();

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (

        <Grid item xs={props.xs} sm={props.sm} md={props.md}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Card className={classes.root} elevation={6}>
                    <CardHeader
                        title={props.name}
                        subheader={props.tech}
                    />
                    <CardMedia
                        className={classes.media}
                        image={`https://res.cloudinary.com/crowandrew/image/upload/v1606810010/${props.image}`}
                        title={props.name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.awards}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            aria-label="GitHub Link"
                            onClick={handleClick}
                            className={classes.flipButton}
                        >

                            <InfoIcon fontSize="large" />
                        </IconButton>
                    </CardActions>
                </Card>

                <Card className={classes.root} elevation={6}>
                    <CardHeader
                        title={props.name}
                        subheader={props.tech}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.longDescription}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.awards}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <Button href={props.gitHubLink}>GitHub Repo</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button href={props.demoLink}>Live Demo</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing className={classes.actionButton}>
                        <IconButton
                            aria-label="GitHub Link"
                            onClick={handleClick}
                            className={classes.flipButton}
                        >

                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </CardActions>
                </Card>
            </ReactCardFlip>
        </Grid>

    )
}