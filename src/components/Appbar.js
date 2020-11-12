import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";

import Home from "../pages/Home";
import Grid from "../pages/Grid";

const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "red",
    },
    flex: {
        flex: 1,
        backgroundColor: "blue",
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        backgroundColor: "purple",
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        backgroundColor: "green",
    },
    toolbarMargin: {
        backgroundColor: "transparent",
        ...theme.mixins.toolbar
    }
    ,
    aboveDrawer: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    transparent: {
        backgroundColor: "transparent",
    }
});

const MyToolbar = withStyles(styles)(
    ({ classes, title, onMenuClick }) => (
        <Fragment>
            <AppBar className={classes.aboveDrawer}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.flex}
                    >
                        Andrew Crow {title}
                    </Typography>
                    <Button
                        color="inherit"
                        target="_blank"
                        href="https://github.com/crowandrew"
                    >
                        <i class="fab fa-2x fa-github-square"></i>
                    </Button>
                    <Button
                        color="inherit"
                        target="_blank"
                        href="https://www.linkedin.com/in/crow-andrew"
                    >
                        <i class="fab fa-2x fa-linkedin"></i>
                    </Button>
                    <Button color="inherit" href="mailto:andrew@crow.me">
                        <i class="fas fa-2x fa-envelope"></i>
                    </Button>
                    <Button color="inherit" href="tel:775-560-8894">
                        <i class="fas fa-2x fa-phone-square"></i>
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </Fragment>
    )
);

const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, onItemClick }) => (
        <Router history={history}>
            <Drawer variant={variant} open={open} onClose={onClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div
                    className={clsx({
                        [classes.toolbarMargin]: variant === 'persistent'
                    })}
                />
                <List>
                    <ListItem button component={Link} to="/" onClick={onItemClick('Home')}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button component={Link} to="/Grid" onClick={onItemClick('Page 2')}>
                        <ListItemText>Page 2</ListItemText>
                    </ListItem>
                    <ListItem button onClick={onItemClick('Page 3')}>
                        <ListItemText>Page 3</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <Route exact path="/" component={Home} />
                <Route path="/grid" component={Grid} />
            </main>
        </Router>
    )
);

function AppBarInteraction({ classes, variant }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('');

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    const onItemClick = title => () => {
        setTitle(title);
        setDrawer(variant === 'temporary' ? false : drawer);
        setDrawer(!drawer);
    };

    return (
        <div className={classes.root}>
            <MyToolbar title={title} onMenuClick={toggleDrawer} />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                onItemClick={onItemClick}
                variant={variant}
            />
        </div>
    );
}

export default withStyles(styles)(AppBarInteraction);