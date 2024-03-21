import React, { ReactElement } from "react";

interface ReferenceProps {
  title: string;
  icons: ReactElement; // Actualizado para aceptar un elemento React
}

const Reference: React.FC<ReferenceProps> = ({ title, icons }) => {
  return (
    <div className="m-2 md:m-[20px] w-full md:w-[195px] h-6 bg-white rounded-tr-[15px] rounded-bl-[25px] rounded-br-[15px] flex items-center">
      <h2 className="pl-2 md:pl-[20px] w-40 md:w-auto h-3 text-teal-700 text-sm font-bold font-['Poppins m-20']">
        {title}
      </h2>

      {icons}
    </div>
  );
};

export default Reference;
