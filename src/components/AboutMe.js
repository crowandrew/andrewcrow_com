import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

import Typography from "@material-ui/core/Typography";

const width_proportion = '90%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: width_proportion,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15vh",
    },
    content: {
        margin: 10,
    }
}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography className={classes.content}>
                    <h3>A little about me:</h3>
                    <p>I have had a passion for technology since I was a little boy and saw my first Apple
                    Macintosh, I wasn’t sure what it did, but it was love at first sight. My journey continued throughout my
                youth of building PCs, burning bootleg CDs full of MP3s for friends, and dreaming of the future. </p>
                    <p>When I turned 16 a friend of mine had a great idea that we should start our own ISP (Internet Service
                    Provider), so we set out to start our own business. We convinced a local computer repair store to use
                    their upstairs storage area and an investor to pay for the equipment. In a few months, we launched
                    Eze-inter.net, and had a blast doing it. As you can expect at 16 I didn’t have any knowledge of
                    contracts or business ownership I was just passionate to build something with technology. The investor
                    in the end sold the business as soon as he could make a profit. This passion and drive continued through
                multiple roles in tech from a network administrator to a computer teacher at an elementary school.</p>
                    <p>However, unforeseen financial hardship arising from an accident while moving drove me to pursue quick
                    money. I moonlighted selling car parts for a large aftermarket car parts supplier and found that I could
                    pay my medical debt faster. This drove me into the sales world where I have been for the last 15 years.
                    Each successful role after role as I moved up the leadership hierarchy didn’t fulfill this need for
                    building something with technology, so after a long discussion with my wife. Basically her telling me
                    100 times that I should just quit my job and do something else. I left my role as Director of Sales in
                July 2020 in the middle of a pandemic.</p>
                    <p>I decided to join a Full Stack Developer Bootcamp and start building amazing things. I’m passionate about
                    coding, but also love to hike, backpack, travel, and cook, so if you are into these things too feel free
                to reach out. I hope our paths cross at some point in a meaningful way.</p>
                </Typography>
            </Paper>
        </div>
    );
}
