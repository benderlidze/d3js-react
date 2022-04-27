import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataContext from "../context";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const contextData = useContext(DataContext);

  const updateSlider = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const radius = Number(target.value);
    setSliderValue(radius);
    contextData?.setRadius(radius);
  };

  useEffect(() => {
    setSliderValue(contextData?.radius as number);
  }, [contextData]);

  return (
    <div className="App">
      <input
        type="range"
        min="1"
        max="1000"
        value={sliderValue}
        onChange={updateSlider}
      />
      {sliderValue}
    </div>
  );
};

export default Slider;
