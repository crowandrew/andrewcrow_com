import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

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
  bar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Navbar() {
  const classes = useStyles();
  const [sideMenu, setSideMenu] = useState({
    drawerIsOpen: false,
  });

  const handleDrawerOpen = () => {
    setSideMenu({ drawerIsOpen: true });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Andrew Crow
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
      <Drawer variant="persistent" open={sideMenu.drawerIsOpen}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemLink>
        </List>
      </Drawer>
    </div>
  );
}
