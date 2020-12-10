import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    opacity: 0.8,
    marginRight: 15,
    marginLeft: "auto",
    marginTop: "50vh",
  },
  pos: {
    marginBottom: 6,
  },
});

export default function Overlay() {
  const classes = useStyles();
  const largeScreen = useMediaQuery('(min-width:600px)')

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant={largeScreen ? "h3" : "h4"} fontWeight="fontWeightBold">
          Andrew Crow
        </Typography>
        <Typography className={classes.pos} variant={largeScreen ? "h4" : "h5"} color="textSecondary">
          Full-Stack Developer
        </Typography>
      </CardContent>
    </Card>
  );
}
