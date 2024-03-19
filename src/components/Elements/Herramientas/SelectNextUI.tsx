import React from "react";
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
  onChange?: (newValue: string[]) => void;
  data: ObjetoData[];
}

const SelectStyle: React.FC<SelectProps> = ({ title, data }) => {
  const [values, setValues] = React.useState<Set<string>>(new Set<string>());


  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues(new Set(e.target.value.split(",")));
  };

  return (
    <div className="w-full h-full">  
      <div className="flex w-full max-w-xs flex-col gap-2">
        <Select
         aria-label={title || "Select option"}
               label={title}
               variant="bordered"
               placeholder="Select"
               labelPlacement="outside"
               classNames={{
                 base: "max-w-xs",
                 trigger: "min-h-unit-12 py-2",
                 label:"text-base"
               }}
              onChange={handleSelectionChange}

        >
          {data.map((datos) => (
            <SelectItem key={datos.value} value={datos.value} aria-label={datos.label}>
              {datos.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectStyle;
