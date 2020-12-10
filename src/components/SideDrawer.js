import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, useScrollTrigger, IconButton, AppBar, Toolbar, Popover, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    drawer: {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


function SideDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const [anchorGitHubEl, setAnchorGitHubEl] = React.useState(null);
    const [anchorLinkedInEl, setAnchorLinkedInEl] = React.useState(null);
    const [anchorEmailEl, setAnchorEmailEl] = React.useState(null);
    const [anchorPhoneEl, setAnchorPhoneEl] = React.useState(null);
    const largeScreen = useMediaQuery('(min-width:600px)')

    const handleGitHubPopoverOpen = (event) => {
        setAnchorGitHubEl(event.currentTarget);
    };

    const handleGitHubPopoverClose = () => {
        setAnchorGitHubEl(null);
    };

    const handleLinkedInPopoverOpen = (event) => {
        setAnchorLinkedInEl(event.currentTarget);
    };
    const handleLinkedInPopoverClose = () => {
        setAnchorLinkedInEl(null);
    };

    const handleEmailPopoverOpen = (event) => {
        setAnchorEmailEl(event.currentTarget);
    };

    const handleEmailPopoverClose = () => {
        setAnchorEmailEl(null);
    };

    const handlePhonePopoverOpen = (event) => {
        setAnchorPhoneEl(event.currentTarget);
    };

    const handlePhonePopoverClose = () => {
        setAnchorPhoneEl(null);
    };

    const openGitHub = Boolean(anchorGitHubEl);
    const openLinkedIn = Boolean(anchorLinkedInEl);
    const openEmail = Boolean(anchorEmailEl);
    const openPhone = Boolean(anchorPhoneEl);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            id="top"
        >
            <List>
                <ListItem>
                    <NavHashLink smooth style={{ textDecoration: 'none', color: 'black' }} to="/#home">
                        <ListItemText primary="Andrew Crow" />
                    </NavHashLink>
                </ListItem>
                <ListItem>
                    <NavHashLink smooth style={{ textDecoration: 'none', color: 'black' }} to="/#home">
                        <ListItemText primary="Full-Stack Developer" />
                    </NavHashLink>
                </ListItem>
            </List>
            <Divider />
            <List>
                {[
                    { name: "About", icon: "far fa-user", href: "/#about" },
                    { name: "Projects", icon: "fas fa-project-diagram", href: "/#projects" },
                    { name: "Skills", icon: "fas fa-laptop-code", href: "/#skills" },
                    { name: "Awards", icon: "far fa-star", href: "/#awards" },
                    { name: "Contact", icon: "far fa-envelope", href: "/#contact" }
                ].map((item) => (
                    <NavHashLink smooth style={{ textDecoration: 'none', color: 'black' }} to={item.href} key={item.name} >
                        <ListItem button>
                            <ListItemIcon>
                                <i className={item.icon}></i>
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </NavHashLink>
                ))}
                <ListItemLink href="https://docs.google.com/document/d/1-4lRiFKLtuhT_8LAQ5IiyTrHnwJyHX79iLn7oBrjG24/edit?usp=sharing" target="_blank">
                    <ListItemIcon>
                        <i className="far fa-file"></i>
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItemLink>
            </List>
        </div>
    );



    return (
        <div className={classes.root}>
            <React.Fragment key="left" >
                <HideOnScroll {...props}>
                    <AppBar className={classes.drawer} position="fixed">
                        <Toolbar>
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                                onClick={toggleDrawer("left", true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.title}>
                                {largeScreen ? <NavHashLink smooth style={{ textDecoration: 'none', color: 'white' }} to="/#home">
                                    Andrew Crow
                            </NavHashLink> : ""}
                            </Typography>
                            <Button
                                color="inherit"
                                target="_blank"
                                href="https://github.com/crowandrew"
                                aria-owns={openGitHub ? 'mouse-over-popover-github' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleGitHubPopoverOpen}
                                onMouseLeave={handleGitHubPopoverClose}
                            >
                                <i className="fab fa-2x fa-github-square"></i>
                            </Button>
                            <Popover
                                id="mouse-over-popover-github"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={openGitHub}
                                anchorEl={anchorGitHubEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleGitHubPopoverClose}
                                disableRestoreFocus
                            >
                                <Typography>https://github.com/crowandrew</Typography>
                            </Popover>
                            <Button
                                color="inherit"
                                target="_blank"
                                href="https://www.linkedin.com/in/crow-andrew"
                                aria-owns={openLinkedIn ? 'mouse-over-popover-linkedin' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleLinkedInPopoverOpen}
                                onMouseLeave={handleLinkedInPopoverClose}
                            >
                                <i className="fab fa-2x fa-linkedin"></i>
                            </Button>
                            <Popover
                                id="mouse-over-popover-linkedin"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={openLinkedIn}
                                anchorEl={anchorLinkedInEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleLinkedInPopoverClose}
                                disableRestoreFocus
                            >
                                <Typography>https://www.linkedin.com/in/crow-andrew</Typography>
                            </Popover>
                            <Button
                                color="inherit"
                                href="mailto:andrew@crow.me"
                                aria-owns={openEmail ? 'mouse-over-popover-email' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleEmailPopoverOpen}
                                onMouseLeave={handleEmailPopoverClose}
                            >
                                <i className="fas fa-2x fa-envelope"></i>
                            </Button>
                            <Popover
                                id="mouse-over-popover-email"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={openEmail}
                                anchorEl={anchorEmailEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleEmailPopoverClose}
                                disableRestoreFocus
                            >
                                <Typography>andrew@crow.me</Typography>
                            </Popover>
                            <Button
                                color="inherit"
                                href="tel:775-560-8894"
                                aria-owns={openPhone ? 'mouse-over-popover-phone' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePhonePopoverOpen}
                                onMouseLeave={handlePhonePopoverClose}
                            >
                                <i className="fas fa-2x fa-phone-square"></i>
                            </Button>
                            <Popover
                                id="mouse-over-popover-phone"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={openPhone}
                                anchorEl={anchorPhoneEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePhonePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography>775-560-8894</Typography>
                            </Popover>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Drawer
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default SideDrawer;
