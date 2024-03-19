import React, { useState, ChangeEvent } from "react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

interface InputProps {
  title?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string; // Añadir el prop 'name'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
console.log(phone)
  return (
    <div className="w-full mx-2 ">
      <h3 className="font-medium">{title}</h3>
      {name !== "celular" && name !== "telefono" && (
        <input
          className="border-solid border border-gray-400 rounded-full h-9 w-full text-center "
          type={type}
          placeholder={placeholder}
          value={value}
          name={name} // Asegurar que se pasa el prop 'name' al elemento input
          onChange={onChange}
        />
      )}


      {(name === "celular" || name === "telefono") && (
        <div className="w-72 h-9">
           <PhoneInput
        

          defaultCountry="cl"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputStyle={{  width: "18rem" , borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem"}} // Estilos aplicados directamente al input

        /> 
           </div>
      )}

    </div>
  );
};

export default Inputs;
