import React, { useContext, useEffect, useRef } from "react";
import * as d3 from "d3";
import DataContext from "../context";

const DonutChart = () => {
  const ref = useRef<SVGSVGElement>(null);
  const contextData = useContext(DataContext);

  useEffect(() => {
    const svgElement = d3.select(ref.current as SVGSVGElement);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  useEffect(() => {
    console.log("contextData", contextData);
  }, [contextData]);

  return <svg ref={ref} />;
};

export default DonutChart;
