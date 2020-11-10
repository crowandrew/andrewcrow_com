import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

export default function HeroOverlay() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2" component="h2">
          Andrew Crow
        </Typography>
        <Typography className={classes.pos} variant="h4" color="textSecondary">
          Full-Stack Developer
        </Typography>
      </CardContent>
    </Card>
  );
}
