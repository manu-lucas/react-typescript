import React, { ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface SeletProps {
  title?: string;
  placeholder?: string;
  value?: string;
  name?: string; // Añadir el prop 'name'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SelectStyle: React.FC<SeletProps> = ({ title }) => {
  const animals = [
    { label: "Estefania", value: "cat" },
    { label: "Veronica", value: "dog" },
    { label: "Aldana", value: "elephant" },
    { label: "Leandro", value: "lion" },
  ];

  return (
    <div className="w-72 mx-8">  
      <h2>{title}</h2>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Select 
          className="max-w-xs"
          aria-label={title ? title : 'Select an option'} // Asegurarse de proporcionar un aria-label
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectStyle;
