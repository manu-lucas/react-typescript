import React, { ReactElement } from "react";

interface ReferenceProps {
  title: string;
  icons: ReactElement; // Actualizado para aceptar un elemento React
}

const Reference: React.FC<ReferenceProps> = ({ title, icons }) => {
  return (
    <div className="m-[20px] w-[195px] h-10 bg-white rounded-tr-[15px] rounded-bl-[25px] rounded-br-[15px] pa">
      <h2 className="w-32 h-3 text-teal-700 text-sm font-bold font-['Poppins']">{title}{icons}</h2>
    </div>
  );
};

export default Reference;
