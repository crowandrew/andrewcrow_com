import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core"
import { CloudinaryContext, Image, } from "cloudinary-react";
import Tooltip from '@material-ui/core/Tooltip';


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
        marginRight: "auto",
        marginLeft: "auto"
    },
    title: {
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold"
    }
});

export default function SkillsGrid() {
    const classes = useStyles();


    const skillsList = [
        {
            id: 1,
            name: "React",
            description: "Open-source, front end, JavaScript library",
            image: "/portfolio/react_d8cwlz.png"
        },
        {
            id: 2,
            name: "JavaScript",
            description: "Programming language that conforms to the ECMAScript specification",
            image: "/portfolio/javascript-icon-png-23_hejtw9.png"
        },
        {
            id: 3,
            name: "MERN",
            description: "Open-source JavaScript software stack for building dynamic web sites and web applications",
            image: "/portfolio/mern.png"
        },
        {
            id: 4,
            name: "MySQL",
            description: "Open-source relational database management system",
            image: "/portfolio/Finding-the-largest-tables-on-MySQL_tkxk3e.jpg"
        },
        {
            id: 5,
            name: "Cloudinary",
            description: "Cloud-based image and video management service",
            image: "/portfolio/0_hgh5gf.png"
        },
        {
            id: 6,
            name: "Mongoose",
            description: "Object Data Modeling library for MOngoDB and Node.js",
            image: "/portfolio/mongoose_coeoqa.png"
        },
        {
            id: 7,
            name: "Sequelize",
            description: "Promise-based Node.js ORM for SQL Databases",
            image: "/portfolio/0_rwd6KeolcXgz7zpx_vs29wz.png"
        },
        {
            id: 8,
            name: "HandleBars",
            description: "Simple template engine",
            image: "/portfolio/handlebars-2-1175024_gtmknn.png"
        },
        {
            id: 9,
            name: "Express",
            description: "Back end web application framework for Node.js use to build web applications and APIs",
            image: "/portfolio/Expressjs_pdborp.png"
        },
        {
            id: 10,
            name: "EJS",
            description: "Simple templating language that lets you generate HTML markup with plain JavaScript",
            image: "/portfolio/upk4qehuybgzeck5wkor.png"
        },
        {
            id: 11,
            name: "UIkit",
            description: "Lightweight and modular front-end CSS framework",
            image: "/portfolio/uikit-285322_tkspl1.png"
        },
        {
            id: 12,
            name: "Bulma",
            description: "Free, open source CSS framework",
            image: "/portfolio/bulma-logo_wkgfvq.png"
        },
        {
            id: 13,
            name: "Node",
            description: "Open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser",
            image: "/portfolio/nodejs_b7jznq.png"
        },
        {
            id: 14,
            name: "Materialize",
            description: "Modern responsive front-end CSS framework based on Material Design",
            image: "/portfolio/materialize_ogfqhg.png"
        },
        {
            id: 15,
            name: "mongoDB",
            description: "NoSQL database that stores data in JSON-like documents with flexible schemas",
            image: "/portfolio/mongodb_jkcs8i.png"
        },
        {
            id: 16,
            name: "jQuery",
            description: "JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax",
            image: "/portfolio/jquery_n6kqj1.png"
        },
        {
            id: 17,
            name: "Foundation",
            description: "Responsive front-end CSS framework",
            image: "/portfolio/foundation_s50pu0.png"
        },
        {
            id: 18,
            name: "BootStrap",
            description: "Free and open-source CSS framework directed at responsive, mobile-first front-end web development",
            image: "/portfolio/bootstrap_fdti8j.png"
        },
        {
            id: 19,
            name: "git",
            description: "A distributed version-control system for tracking changes in any set of files.",
            image: "/portfolio/git_k5bb3r.png"
        },
        {
            id: 20,
            name: "HTML5",
            description: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web",
            image: "/portfolio/html5_uz727y.png"
        },
        {
            id: 21,
            name: "Heroku",
            description: "Cloud platform as a service supporting several programming languages",
            image: "/portfolio/heroku_wvnxc5.png"
        },
        {
            id: 22,
            name: "CSS3",
            description: "Style sheet language used for describing the presentation of a document written in a markup language such as HTML",
            image: "/portfolio/css3_bx81sg.png"
        },
        {
            id: 23,
            name: "Material-UI",
            description: "React components for faster and easier web development",
            image: "/portfolio/logo_go8g43.png"
        },
        {
            id: 24,
            name: "getStream",
            description: "Scalable & Fast API for building social networks, activity feeds,activity streams and chat apps",
            image: "/portfolio/stream.png"
        },
        {
            id: 25,
            name: "Passport",
            description: "Simple, unobtrusive authentication for Node.js",
            image: "/portfolio/passport.png"
        },
    ];

    return (
        <div className={classes.root}>
            <Paper square elevation={3} className={classes.paper}>
                <Typography variant="h3" className={classes.title}>
                    Skills
                </Typography>
                <Grid
                    container
                    spacing={3}
                    justify="space-evenly"
                    alignItems="center"
                    className={classes.content}
                >
                    {skillsList.map(
                        card =>
                            <Grid key={card.id} item xs={6} sm={3} md={2} className={classes.media} >
                                <Tooltip
                                    enterTouchDelay="0"
                                    leaveTouchDelay="1500"
                                    start="bottom-end"
                                    title={
                                        <React.Fragment>
                                            <Typography color="inherit" variant="h6">{card.name}</Typography>
                                        </React.Fragment>
                                    }>
                                    <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
                                        <Image
                                            className={classes.image}
                                            publicId={card.image}
                                            // dpr="auto"
                                            // responsive
                                            width="100"
                                            crop="fit"
                                            // responsiveUseBreakpoints="true"
                                            loading="lazy"
                                            height="100"
                                        />
                                    </CloudinaryContext>
                                </Tooltip>
                            </Grid>
                    )}
                </Grid>
            </Paper>
        </div>
    );
}