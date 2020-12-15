import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    opacity: 0.8,
    marginRight: 15,
    marginLeft: "auto",
    marginTop: "50vh",
    marginBottom: "15vh"
  },
  cardBig: {
    minWidth: 275,
    maxWidth: 400,
    opacity: 0.8,
    marginRight: 15,
    marginLeft: "auto",
    marginTop: "50vh",
    marginBottom: "30vh"
  },
  pos: {
    marginBottom: 6,
  },
});

export default function Overlay() {
  const classes = useStyles();
  const largeScreen = useMediaQuery('(min-width:1010px)')

  return (

    <Card className={largeScreen ? classes.cardBig : classes.card}>
      <CardContent>
        <Typography variant={largeScreen ? "h3" : "h4"} fontWeight="fontWeightBold">
          Andrew Crow
        </Typography>
        <Typography className={classes.pos} variant={largeScreen ? "h4" : "h5"} color="textSecondary">
          Full-Stack Developer
        </Typography><Typography className={classes.pos} variant={largeScreen ? "subtitle1" : "subtitle2"} color="inherit">
          #OPENTOWORK
        </Typography>
      </CardContent>
    </Card>

  );
}
