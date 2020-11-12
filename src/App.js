import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const useStyles = makeStyles((theme) => {

})

function App() {
  const classes = useStyles();
  return (
    <Router>
      <main >
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/skills" component={Skills} />
          <Route path="/awards" component={Awards} />
          <Route path="/contact" component={Contact} /> */}
      </main>
    </Router>


  );
}

export default App;
