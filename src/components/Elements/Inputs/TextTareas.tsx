import React, { ChangeEvent } from 'react';

interface TextTareasProps {
  title: string;
  placeholder?: string;
  value?: string;
  name?: string; // Añadir el prop 'name'
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextTareas: React.FC<TextTareasProps> = ({ title, placeholder, value, onChange, name }) => {
  return (
    <div className='mx-8'>   
      <h3 className="font-medium">{title}</h3>
      <textarea 
        className="border-solid border-2 border-gray-400 rounded w-full h-32" // Ajustado para mejor visualización y uso del espacio
        placeholder={placeholder}
        value={value}
        name={name} // Asegurar que se pasa el prop 'name' al elemento textarea
        onChange={onChange}
      />
    </div>
  );
};

export default TextTareas;
