import React, {useEffect, useState, useRef} from 'react'
import * as d3 from 'd3';

export default function LineDiagram() {
  const [data] = useState([10, 20, 30, 40, 50, 30, 10]);
  const svgRef = useRef();
  useEffect(() => {
    // setting up our svg
    const width = 600;
    const height = 100;
    const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .style('background-color', '#d3d3d3')
        .style('margin-top', '50')
        .style('overflow', 'visible');

    // setting the scaling
    const xScale = d3.scaleLinear()
        .domain([0, data.length - 1])
        .range([0, width]);
    const yScale = d3.scaleLinear()
        .domain([0, height])
        .range([height, 0]);
    const generateScaledLine = d3.line()
        .x((d, i) => xScale(i))
        .y(yScale)
        .curve(d3.curveCardinal);

    // setting the axises
    const xAxis = d3.axisBottom(xScale)
        .ticks(data.length)
        .tickFormat(i => i + 1);
    const yAxsis = d3.axisLeft(yScale)
        .ticks(4);
    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${height})`);
    svg.append('g')
        .call(yAxsis);
    
    // setting up the data for svg
    svg.selectAll('.line')
        .data([data])
        .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'black');
  }, [data]);
  return (
    <div>
        <h3>Line Diagram</h3>
        <svg ref={svgRef}></svg>
    </div>
  )
}
