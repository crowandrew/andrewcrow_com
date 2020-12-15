import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core"
import ProjectCard from './ProjectCard'

const width_proportion = '100%';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: width_proportion,
        marginLeft: "auto",
        marginRight: "auto",
    },
    paper: {
        backgroundColor: "white",
        padding: 10
    },
    content: {
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold"
    }
});

export default function ProjectGrid() {
    const classes = useStyles();

    const projectList = [
        {
            id: 1,
            img: "/portfolio/Screen_Shot_2020-12-01_at_12.06.30_AM_ge20oc.png",
            name: "Minnesvart",
            tech: "React, JS, MySql, Node, Passport",
            shortDescription: "Micro-adventure social media app built with React, JS, MySql, Node, Express, Passport",
            longDescription: "Minnesvärt is a microadventure community providing short, simple, and local activity ideas to Washingtonians. At Minnesvärt we are selling the idea of access to the microadventure community. Adventure tour companies can use this application to post their activities. The user base will be able to retrieve that information, filter by tags, rate the adventure, and network within activity discussion. Stay wild, stay local, stay Minnesvärt.",
            gitHubLink: "https://github.com/kbnewlon/project3",
            demoLink: "http://minnesvart.herokuapp.com/",
            awards: "Best Presentation and People's Choice Awards"
        },
        {
            id: 2,
            img: "/portfolio/Screen_Shot_2020-10-28_at_10.58.02_PM_isja65.png",
            name: "Whale Hunter",
            tech: "JS, MySql, Node, HandleBars",
            shortDescription: "Beer tracking, search engine and social media app built with JS, MySql, Node, Express, and Handlebars",
            longDescription: "Whale Hunter is a beer tracking, search engine and social media app that is built to be your go to for beer discovery. Browse our app and explore new beers to taste while learning more about new beers and the breweries that made them. Save those beers to a 'six pack' for referencing later. Share your experiences with your friends and strangers by posting about your experience, sharing your created six packs, and by rating beer by using our innovative Ahab scale.",
            gitHubLink: "https://github.com/PatCeriale/Whale-Hunter",
            demoLink: "https://whalehunterbeer.herokuapp.com/",
            awards: "Best Functionality and People's Choice Awards"
        },
        {
            id: 3,
            img: "/portfolio/Screen_Shot_2020-10-28_at_11.11.07_PM_vubetd.png",
            name: "moodSing",
            tech: "JS, JQuery",
            shortDescription: "Music recommendation app built with JS and JQuery",
            longDescription: "Music recommendation app that suggests music suited to the weather around the user as well as their current mood and preferred genre. These features bypass the need for users to wander and search for music that fits their mood and helps introduce the users to new music.",
            gitHubLink: "https://github.com/Mrjcowman/moodSing",
            demoLink: "https://mrjcowman.github.io/moodSing/",
            awards: "Best UI/UX Award"
        },
        {
            id: 4,
            img: "/portfolio/screenshot_ozhxjv.png",
            name: "Google Book Search",
            tech: "React, JS, MongoDB, Node",
            shortDescription: "Google Books search app built with React, Node, Express and MongoDB",
            longDescription: "A React-based Google Books Search app. Is an app with React components that work with helper/util functions and utilize React lifecycle methods to query and display books based on user searches. It also uses Node, Express and MongoDB so that users can save books to review or purchase later.",
            gitHubLink: "https://github.com/crowandrew/google_book_search",
            demoLink: "https://arcane-crag-72339.herokuapp.com",
            awards: ""
        },
        {
            id: 5,
            img: "/portfolio/screenshot_m6fpol.png",
            name: "Employee Directory",
            tech: "React, JS",
            shortDescription: "Employee directory app built with React",
            longDescription: "This app is an employee directory created with React. This app is broken up into multiple application UI components that manage component state and respond to user events.",
            gitHubLink: "https://github.com/crowandrew/employee_directory",
            demoLink: "https://peaceful-anchorage-12565.herokuapp.com"
        },
        {
            id: 6,
            img: "/portfolio/screenshot_btioh2.png",
            name: "Offline Budget Tracker",
            tech: "JS, MongoDB, Node, Service Worker",
            shortDescription: "Budget Tracking app built with JS, MongoDB, Node, Express, and Service Workers",
            longDescription: "Budget Tracker application to allow for offline access and functionality. A user will be able to add expenses and deposits to their budget with or without a connection.",
            gitHubLink: "https://github.com/crowandrew/Online_Offline_Budget_Tracker",
            demoLink: "https://tranquil-journey-45806.herokuapp.com",
            awards: ""
        },
        {
            id: 7,
            img: "/portfolio/screenshot1_zw6qm7.png",
            name: "Swole Maker",
            tech: "JS, MongoDB, Node, HandleBars",
            shortDescription: "Workout tracking app built with JS,MongoDB, Node, Express, and Handlebars",
            longDescription: "This app is a workout tracker created with a Mongo database, Mongoose schema and handles routes with Express, along with and interactive frontend built with Bootstrap. This is also built with and MVC design.",
            gitHubLink: "https://github.com/crowandrew/workout_tracker",
            demoLink: "https://swoletracker.herokuapp.com",
            awards: ""
        }
    ];

    return (
        <div className={classes.root}>
            <Paper square elevation={3} className={classes.paper}>
                <Typography variant="h3" className={classes.content}>
                    Projects
                </Typography>
                <Grid container justify="center" alignItems="center" spacing={2} className={classes.content}>
                    {projectList.map(
                        card => <ProjectCard key={card.id} id={card.id} name={card.name} tech={card.tech} awards={card.awards} image={card.img} shortDescription={card.shortDescription} longDescription={card.longDescription} gitHubLink={card.gitHubLink} demoLink={card.demoLink} xs={12} sm={6} md={4}></ProjectCard>
                    )}
                </Grid>
            </Paper>
        </div>
    );
}