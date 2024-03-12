import React, { useState, ChangeEvent } from "react";
import { PhoneInput } from "react-international-phone";

interface InputProps {
  title: string;
  type: string;
  placeholder?: string;
  value: string;
  name: string; // Añadir el prop 'name'
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputProps> = ({
  title,
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  const [phone, setPhone] = useState<string>(""); // State for phone number

  return (
    <div className="mx-8">
      <h3 className="font-medium">{title}</h3>
      {name !== "celular" && name !== "telefono" && (
        <input
          className="border-solid border-2 border-gray-400 rounded-full h-9 w-72"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name} // Asegurar que se pasa el prop 'name' al elemento input
          onChange={onChange}
        />
      )}


      {(name === "celular" || name === "telefono") && (
        <div className="">
          <PhoneInput
  
            defaultCountry="cl"
            value={phone}
            onChange={setPhone} // Simplificado para depuración
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Inputs;
