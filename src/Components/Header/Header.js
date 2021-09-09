import React from "react";
import Post from "./Post";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PieChart from "../Images/PieChart.png";
import ReactInteraction from "../Images/ReactInteraction.png";
import SmileyFace from "../Images/SmileyFace.png";

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
          src={SmileyFace}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/csv"
          title="Working with CSV files"
          cardContent="A program that loads and parses some CSV data. This also includes functionality such as Parsing CSV data with D3, counting rows and columns and Estimating data size and constructing and displaying text "
          src={SmileyFace}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/mouse"
          title="Interaction with React"
          cardContent="This will use useState from React to track mouse events"
          src={ReactInteraction}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href="/dataviz"
          title="Creating Pie Chart with React and D3"
          cardContent="A program that loads in some data about CSS named colors using d3 utilities, and use React to render the data as a radial burst"
          src={PieChart}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Post
          href=""
          title=""
          cardContent=""
          src={PieChart}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
