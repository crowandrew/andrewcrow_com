import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Card, Grid, Paper, Typography } from "@material-ui/core";
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
        marginTop: 10,
        marginBottom: 5,
        color: "white",
        fontWeight: "bold"
    },
    awardCard: {
        maxWidth: 310

    },
    paper: {
        backgroundColor: "grey",
        padding: 10
    },
    yellow: {
        color: "gold"
    }
}));



export default function AwardsList() {
    const classes = useStyles();
    const largeScreen = useMediaQuery('(min-width:600px)')

    const listOfAwards = [
        {
            id: 1,
            name: "People's Choice Award",
            location: "UW Bootcamp",
            date: "November, 2020",
            for: "Award was for Minnesvart.",
            icon: "fas fa-award"
        },
        {
            id: 2,
            name: "Best Presentation",
            location: "UW Bootcamp",
            date: "November, 2020",
            for: "Award was for Minnesvart.",
            icon: "fas fa-crown"
        },
        {
            id: 3,
            name: "People's Choice Award",
            location: "UW Bootcamp",
            date: "October, 2020",
            for: "Award was for Whale Hunter.",
            icon: "fas fa-award"
        },
        {
            id: 4,
            name: "Best Functionality",
            location: "UW Bootcamp",
            date: "October, 2020",
            for: "Award was for Whale Hunter.",
            icon: "fas fa-medal"
        },
        {
            id: 5,
            name: "Best UI/UX",
            location: "UW Bootcamp",
            date: "September, 2020",
            for: "Award was for moodSing",
            icon: "fas fa-trophy"
        },
        {
            id: 6,
            name: "Avvo Star Award",
            location: "Avvo.com",
            date: "August, 2017",
            for: "Top 1% of the company annually",
            icon: "fas fa-star"
        },
        {
            id: 7,
            name: "Manager of the Quarter",
            location: "Avvo.com",
            date: "June, 2017",
            for: "Top Sales Manager of the quarter",
            icon: "fas fa-dollar-sign"
        },
    ]

    return (
        <div className={classes.root}>
            <Paper square elevation={3} className={classes.paper}>
                <Typography variant="h3" className={classes.content}>
                    Awards
                </Typography>
                <Grid
                    container
                    justify="space-evenly"
                    spacing={largeScreen ? 2 : 1}
                >
                    {listOfAwards.map((award) => (
                        <Grid key={award.id} item xs={12} sm={6} md={4} lg={3} className={classes.awardCard}>
                            <Card elevation={6}>
                                <CardContent>
                                    <Grid container >
                                        <Grid item xs={2}>
                                            <Typography className={classes.yellow} variant="h6">
                                                <i className={award.icon}></i>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10} >
                                            <Typography variant="h6">
                                                {award.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">
                                                {award.location} | {award.date}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1">
                                                {award.for}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Grid>
                    ))}
                </Grid>

            </Paper>
        </div>
    );
}