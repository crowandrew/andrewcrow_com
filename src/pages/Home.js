import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Overlay from "../components/Overlay";

const useStyles = makeStyles({
  root: {
    height: "100vh"
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Overlay />
    </div >
  );
}

export default Home;
