import React, { useState, useEffect } from "react";
import { csv, arc, pie } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/ShreyaaChauhan/e5a43df5c7fe582a19cfa8d7ee776004/raw/b0074299a15a7bd5dede88c734c20ba079a211fa/cssNamedColors.csv";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const DataViz = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { height, width } = windowDimensions;
  const centerX = width / 2;
  const centerY = height / 2;
  const colorPie = pie().value(1);
  const pieArc = arc().innerRadius(0).outerRadius(width);
  console.log(windowDimensions);

  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d) => (
          <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
};

export default DataViz;
