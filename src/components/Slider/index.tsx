import { useState } from "react";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const updateSlider = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSliderValue(Number(target.value));
  };
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
