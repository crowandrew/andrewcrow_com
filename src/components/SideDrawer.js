import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

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
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SideDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItemLink href="/">
                    <ListItemText primary="Andrew Crow" />
                </ListItemLink>
                <ListItemLink href="/">
                    <ListItemText primary="Full-Stack Developer" />
                </ListItemLink>
            </List>
            <Divider />
            <List>
                {[
                    { name: "About", icon: "far fa-user", href: "/about" },
                    { name: "Projects", icon: "fas fa-project-diagram", href: "/projects" },
                    { name: "Skills", icon: "fas fa-laptop-code", href: "/skills" },
                    { name: "Awards", icon: "far fa-star", href: "/awards" },
                    { name: "Contact", icon: "far fa-envelope", href: "/contact" },
                    { name: "Resume", icon: "far fa-file", href: "/resume/Andrew Crow June 2020 C.pdf" }
                ].map((item) => (
                    <ListItemLink href={item.href} key={item.name}>
                        <ListItemIcon>
                            <i className={item.icon}></i>
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemLink>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key="left" className={classes.root}>
                <AppBar className={classes.drawer}>
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
                            <Link href="/" color="inherit">
                                Andrew Crow
                            </Link>
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
