import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" fontWeight="fontWeightBold">
          Andrew Crow
        </Typography>
        <Typography className={classes.pos} variant="h4" color="textSecondary">
          Full-Stack Developer
        </Typography>
      </CardContent>
    </Card>
  );
}
