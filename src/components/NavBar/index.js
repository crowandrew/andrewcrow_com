import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
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
    </div>
  );
}
