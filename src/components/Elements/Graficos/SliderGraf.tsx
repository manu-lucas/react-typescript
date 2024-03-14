import React, { useState } from "react";
import { Slider } from "@nextui-org/react";

const SliderGraf: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(1.5);
console.log(sliderValue)
  const handleSliderChange = (value: number | number[]) => {
    if (typeof value === 'number') {
      setSliderValue(value);
    }
  };

  return (
    <Slider
      label="%"
      size="sm"
      color="success"
      step={1}
      maxValue={100}
      minValue={-100}
      fillOffset={0}
      defaultValue={1.5}
      className="max-w-md"
      formatOptions={{ signDisplay: 'always' }}
      // Utilizar el evento onChange para actualizar el estado
      onChange={handleSliderChange}
    />
  );
}

export default SliderGraf;
