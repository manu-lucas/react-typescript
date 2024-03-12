import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (

    <input 
  className="border-solid border-2 border-gray-400 rounded-full h-9 w-auto"
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
/>
  );
};

export default Inputs;
