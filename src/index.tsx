import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "./components/Slider";
import DonutChart from "./components/DonutChart";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Slider />
    <DonutChart />
  </React.StrictMode>
);

reportWebVitals();
