import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Overlay from "../components/Overlay";

const styles = theme => ({
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: "none"
    },
    transparent: {
        backgroundColor: "transparent",
    }
});

const Home = props => {
    const { classes } = props;
    return (
        <div className={classes.transparent}>
            <Overlay />
        </div>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);