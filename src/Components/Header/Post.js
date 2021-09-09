import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";



// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "tomato",
    borderRadius: 5,
    textDecoration: "none",
    border: 0,
    color: "white",
    fontWeight: 900,
    textTransform: "uppercase",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      background: "rgb(34, 34, 34)",
    },
  },
})(Button);

const useStyles = makeStyles({
  header: {
    padding: 40,
  },
  card: {
    borderRadius: 16,
    maxWidth: 300,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0)",
    },
  },
  media: {
    height: 200,
    width: 300,
  },
});
const Post = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.src}
            title={props.title}
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.cardContent}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: "center" }}>
          <Link to={props.href} style={{ textDecoration: "none" }}>
            <StyledButton>Show More</StyledButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
