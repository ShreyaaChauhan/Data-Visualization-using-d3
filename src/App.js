import "./App.css";
import React from "react";
import SmileyFaceSVG from "./Components/Smiley_Face_SVG/index";
import NavBar from "./Components/NavBar/Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import notfound from "./Components/notfound";
import CsvFiles from "./Components/CsvFiles/CsvFiles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    zIndex: 0,
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div class="bg-image">
        <NavBar />
        <Particles
          canvasClassName={classes.particlesCanva}
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 2,
                  color: "tomato",
                },
              },
            },
          }}
        />
        <Route path="/" component={notfound} exact />
        <Route path="/home" component={Header} />
        <Route path="/svg" component={SmileyFaceSVG} />
        <Route path="/csv" component={CsvFiles} />
      </div>
    </BrowserRouter>
  );
}

export default App;

/**/
