import React, { ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface ObjetoData {
  label: string;
  value: string;
}


interface SelectProps {
  title?: string;
  placeholder?: string;
  value?: string[];
  name?: string;
  onChange?: (newValue: string[]) => void; // Cambiar el tipo de onChange
  data: ObjetoData[];
}

const SelectStyle: React.FC<SelectProps> = ({ title, onChange,data,placeholder }) => {
  const [value, setValue] = React.useState<string[]>([]);
console.log(value)
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Array.from(e.target.selectedOptions, option => option.value); // Obtener los valores seleccionados
    setValue(newValue); // Actualizar el estado
    if (onChange) {
      onChange(newValue); // Propagar el cambio si onChange está definido
    }
  };

  

  return (
    <div className="w-full h-full">  
      <h2>{title}</h2>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <Select
          variant="bordered"
          placeholder={placeholder?placeholder:data[0].label}
          value={data[0].value}
          className="max-w-xs"
          onChange={handleChange} // Utilizar la función handleChange
        >
          {data.map((animal) => (
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
