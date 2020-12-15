import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  root: {
    background: "url(https://res.cloudinary.com/crowandrew/image/upload/w_auto,c_scale/v1603932272/portfolio/Crow_Andrew_-_High_Res_2_n88ggh.png) no-repeat center center fixed",
    height: "100%",
    backgroundSize: "cover",
    paddingTop: "50vh"
  },
  card: {
    minWidth: 275,
    maxWidth: 400,
    opacity: 0.8,
    marginRight: 15,
    marginLeft: "auto",

  },
  pos: {
    marginBottom: 6,
  },
});

export default function Overlay() {
  const classes = useStyles();
  const largeScreen = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
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
    </div>
  );
}
