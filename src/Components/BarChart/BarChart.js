import React, { useState, useEffect } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/ShreyaaChauhan/d51530217347c18b1f11baa006b59bc2/raw/ef2785312f61e7e011a6a32d656954e82f8d0abc/World_Population_UN_2019.csv";

const width = 800;
const height = 800;
const margin = { top:100, right: 100, bottom: 100, left: 100};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.bottom;

const BarChart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'];
      return d;
    };
    csv(csvUrl, row).then(data=> setData(data.slice(0,10)));
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yScale = scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);
    console.log(data[0]["Country"])
  return (
    <svg width={width} height={height}>§
        <g transform={`translate(${margin.left},${margin.top})`}>
          {xScale.ticks().map(tickValue => (
            <g transform={`translate(${xScale(tickValue)},0)`}>
            <line
            y2={innerHeight}
            stroke="black"/>
            <text y ={innerHeight}>{tickValue}</text>
            </g>
          ))}
      {data.map(d => (
        <rect
          x={0}
          y={yScale(d.Country )}
          width={xScale(d.Population)}
          height={yScale.bandwidth()}
        />
      ))}
      </g>
    </svg>
  );
};

export default BarChart;
