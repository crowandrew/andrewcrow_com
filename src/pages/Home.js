import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Overlay from "../components/Overlay";

const height_proportion = "100%"

const useStyles = makeStyles({
  root: {
    height: height_proportion,

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
