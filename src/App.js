import React from 'react';
import { makeStyles, Grid, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Awards from './pages/Awards'
import Contact from './pages/Contact'
import SideDrawer from "./components/SideDrawer"

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#veryTop');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App(props) {

  return (
    <Router>
      <Grid container >
        <Grid item xs={12} id="veryTop">
        </Grid>
        <Route exact path="/">
          <Grid item xs={12} id="home">
            <SideDrawer />
            <Home />
          </Grid>
          <Grid item xs={12} id="about">
            <About />
          </Grid>
          <Grid item xs={12} id="projects">
            <Projects />
          </Grid>
          <Grid item xs={12} id="skills">
            <Skills />
          </Grid>
          <Grid item xs={12} id="awards">
            <Awards />
          </Grid>
          <Grid item xs={12} id="contact">
            <Contact />
          </Grid>
        </Route>
      </Grid>
      <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Router>
  );
}

export default App;
