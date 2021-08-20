import "./App.css";
import React from "react";
import SmileyFaceSVG from "./Components/Smiley_Face_SVG/index";
import NavBar from "./Components/NavBar/Navbar";
import Header from "./Components/Header/Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div class="bg-image">
        <div class="layer">
          <NavBar />
          <Header />
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
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 7,
                    size_min: 0.2,
                    sync: true,
                  },
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.2,
                    sync: true,
                  },
                },
              },
            }}
          />
          <SmileyFaceSVG />
        </div>
      </div>
    </>
  );
}

export default App;

/**/
