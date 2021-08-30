import React from "react";
import Post from "./Post";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="./svg"
          title="Smiley Face SVG"
          cardContent="This is smiley face designed by svg only"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/csv"
          title="Working with CSV files"
          cardContent="A program that loads and parses some CSV data"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/mouse"
          title="Interaction with React"
          cardContent="This will use useState from React to track mouse events"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/home"
          title="Yet I have to decide"
          cardContent="This is being developed"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/home"
          title="Yet I have to decide"
          cardContent="This is being developed"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/home"
          title="Yet I have to decide"
          cardContent="This is being developed"
        />
      </Grid>
    </Grid>
  );
};

export default Header;
