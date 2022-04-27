import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Slider from "./components/Slider";
import DonutChart from "./components/DonutChart";
import reportWebVitals from "./reportWebVitals";
import DataContext from "./components/context";
import { useEffect } from "react";

const Main = () => {
  const [radius, setRadius] = useState<number>(0);

  return (
    <React.StrictMode>
      <DataContext.Provider value={{ radius, setRadius }}>
        <Slider />
        <DonutChart />
      </DataContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Main />);

reportWebVitals();
