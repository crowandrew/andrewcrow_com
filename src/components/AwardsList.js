import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

import Typography from "@material-ui/core/Typography";

const width_proportion = '90%';
const width_content = '100%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: width_proportion,
        marginRight: 15,
        marginLeft: "auto",
        marginTop: "40vh",
    },
    content: {
        margin: 10,
        width: width_content
    }
}));

export default function AwardsList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography className={classes.content}>
                    <h3>Awards</h3>
                    <dl class="uk-description-list">
                        <dt>People's Choice Award</dt>
                        <dd>UW Bootcamp | October,2020 | Award was for Whale Hunter project.</dd>
                        <dd><br></br></dd>
                        <dt>Best Functionality</dt>
                        <dd>UW Bootcamp | October,2020 | Award was for Whale Hunter project.</dd>
                        <dd><br></br></dd>
                        <dt>Best UI/UX</dt>
                        <dd>UW Bootcamp | September,2020 | Award was for moodSing project.</dd>
                        <dd><br></br></dd>
                        <dt>Avvo Star Award</dt>
                        <dd>Avvo.com | August, 2017 | Only awarded to top 1% of the company annually</dd>
                        <dd><br></br></dd>
                        <dt>Sales Manager of the Quarter, Q2 2017</dt>
                        <dd>Avvo.com | June, 2017 | Top Sales Manager of the quarter</dd>
                    </dl>
                </Typography>
            </Paper>
        </div>
    );
}