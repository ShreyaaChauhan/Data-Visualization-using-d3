import React from "react";
import Face from "./Face";

const width = 960;
const height = 500;

function SmileyFaceSVG() {
  return (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={(1 / 96) * width}
      eyeOffsetX={(9 / 96) * width}
      eyeOffsetY={(9 / 96) * width}
      eyeRadius={(4 / 96) * width}
      mouthRadius={(12 / 96) * width}
      mouthWidth={(1 / 96) * width}
    />
  );
}

export default SmileyFaceSVG;
