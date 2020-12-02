import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core"
import { CloudinaryContext, Image, } from "cloudinary-react";

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
        margin: 5
    },
    media: {
        height: 150,
        width: 150,
        margin: "auto",
    }
});

export default function SkillsGrid() {
    const classes = useStyles();

    const skillsList = [
        {
            id: 1,
            name: "React",
            image: "/portfolio/react_d8cwlz.png"
        },
        {
            id: 2,
            name: "JavaScript",
            image: "/portfolio/javascript_whjmio.png"
        },
        {
            id: 3,
            name: "MERN",
            image: "/portfolio/mern.png"
        },
        {
            id: 4,
            name: "MySQL",
            image: "/portfolio/Finding-the-largest-tables-on-MySQL_tkxk3e.jpg"
        },
        {
            id: 5,
            name: "Cloudinary",
            image: "/portfolio/0_hgh5gf.png"
        },
        {
            id: 6,
            name: "Mongoose",
            image: "/portfolio/mongoose_coeoqa.png"
        },
        {
            id: 7,
            name: "Sequelize",
            image: "/portfolio/0_rwd6KeolcXgz7zpx_vs29wz.png"
        },
        {
            id: 8,
            name: "HandleBars",
            image: "/portfolio/handlebars-2-1175024_gtmknn.png"
        },
        {
            id: 9,
            name: "Express",
            image: "/portfolio/Expressjs_pdborp.png"
        },
        {
            id: 10,
            name: "EJS",
            image: "/portfolio/upk4qehuybgzeck5wkor.png"
        },
        {
            id: 11,
            name: "UIkit",
            image: "/portfolio/uikit-285322_tkspl1.png"
        },
        {
            id: 12,
            name: "Bulma",
            image: "/portfolio/bulma-logo-45B5145BF4-seeklogo.com_s3nb58.png"
        },
        {
            id: 13,
            name: "Node",
            image: "/portfolio/nodejs_b7jznq.png"
        },
        {
            id: 14,
            name: "Materialize",
            image: "/portfolio/materialize_ogfqhg.png"
        },
        {
            id: 15,
            name: "mongoDB",
            image: "/portfolio/mongodb_jkcs8i.png"
        },
        {
            id: 16,
            name: "jQuery",
            image: "/portfolio/jquery_n6kqj1.png"
        },
        {
            id: 17,
            name: "Foundation",
            image: "/portfolio/foundation_s50pu0.png"
        },
        {
            id: 18,
            name: "BootStrap",
            image: "/portfolio/bootstrap_fdti8j.png"
        },
        {
            id: 19,
            name: "GitHub",
            image: "/portfolio/github_gwlmx2.png"
        },
        {
            id: 20,
            name: "HTML5",
            image: "/portfolio/html5_uz727y.png"
        },
        {
            id: 21,
            name: "Heroku",
            image: "/portfolio/heroku_wvnxc5.png"
        },
        {
            id: 22,
            name: "CSS3",
            image: "/portfolio/css3_bx81sg.png"
        },
        {
            id: 23,
            name: "Material-UI",
            image: "/portfolio/logo_go8g43.png"
        },
        {
            id: 24,
            name: "getStream",
            image: "/portfolio/stream.png"
        },
        {
            id: 25,
            name: "Passport",
            image: "/portfolio/passport.png"
        },
    ];

    return (
        <div className={classes.root}>
            <Paper square elevation={3} className={classes.paper}>
                <Typography variant="h3" className={classes.content}>
                    Skills
                </Typography>
                <Grid container spacing={2} className={classes.content}>
                    {skillsList.map(
                        card =>
                            <Grid key={card.id} item xs={6} sm={3} md={2} className={classes.media} >
                                <Typography variant="h5">
                                    {card.name}
                                </Typography>
                                <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} >
                                    <Image
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
                            </Grid>
                    )}
                </Grid>
            </Paper>
        </div>
    );
}