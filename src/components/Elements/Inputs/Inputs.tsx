import React, { ChangeEvent } from 'react';

interface InputProps {
  title: string;
  type: string;
  placeholder?: string;
  value: string;
  name: string; // Añadir el prop 'name'
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputProps> = ({ title, type, placeholder, value, onChange, name }) => {
  return (
    <div className='mx-8'>   
      <h3 className="font-medium">{title}</h3>
      <input 
        className="border-solid border-2 border-gray-400 rounded-full h-9 w-72"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name} // Asegurar que se pasa el prop 'name' al elemento input
        onChange={onChange}
      />
    </div>
  );
};

export default Inputs;
