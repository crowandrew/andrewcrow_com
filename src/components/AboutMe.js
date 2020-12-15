import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const width_proportion = '100%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: width_proportion,
        marginLeft: "auto",
        marginRight: "auto",
    },
    content: {
        marginTop: 15,
        marginBottom: 10,
        color: "white",
        fontWeight: "bold"
    },
    paper: {
        backgroundColor: "grey",
        width: width_proportion,
        padding: 10,
        paddingBottom: "20vh",
        textAlign: "center",
    },
    paperSmall: {
        backgroundColor: "grey",
        width: width_proportion,
        padding: 10,
        paddingBottom: "20vh"
    },
    highlight: {
        color: "lightgrey",
        fontWeight: "bold"
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:900px)')
    const smallScreen = useMediaQuery('(min-width:765px')

    return (

        <div className={classes.root}>
            <Paper square elevation={3} className={!smallScreen ? classes.paperSmall : classes.paper}>

                <Typography variant={largeScreen ? "h3" : "h4"} className={classes.content}>
                    Hello, my name is Andrew Crow.
                </Typography>
                {!smallScreen ?
                    <Typography variant={largeScreen ? "h5" : "h6"} color="textSecondary">
                        I'm a senior-level sales leader turned <span className={classes.highlight}>full-stack developer</span>.
                        I decided to leave sales and  pursue my passion to build and create.
                        I graduated <span className={classes.highlight}>top of my class</span> from the University of Washington Coding BootCamp.
                        Please check out my <span className={classes.highlight}>awarding winning</span> projects in my projects section below.
                        Also, you can stop here and say hello at <span className={classes.highlight}>andrew@crow.me</span>.
                </Typography>
                    :
                    <Fragment>
                        <Typography variant={largeScreen ? "h5" : "h6"} color="textSecondary">
                            I'm a senior-level sales leader turned <span className={classes.highlight}>full-stack developer</span>.
                    </Typography>
                        <Typography variant={largeScreen ? "h5" : "h6"} color="textSecondary">
                            I decided to leave sales and  pursue my passion to build and create.
                    </Typography>
                        <Typography variant={largeScreen ? "h5" : "h6"} color="textSecondary">
                            I graduated <span className={classes.highlight}>top of my class</span> from the University of Washington Coding BootCamp.
                    </Typography>
                        <Typography variant={largeScreen ? "h5" : "h6"} color="textSecondary">
                            Please check out my <span className={classes.highlight}>awarding winning</span> projects in my projects section below.
                    </Typography>
                        <Typography variant={largeScreen ? "h5" : "h6"} color="textSecondary">
                            Also, you can stop here and say hello at <span className={classes.highlight}>andrew@crow.me</span>.
                    </Typography>
                    </Fragment>
                }
            </Paper>
        </div>
    );
}
