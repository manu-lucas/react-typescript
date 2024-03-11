import React, { ReactElement } from "react";

interface ReferenceProps {
  title: string;
  icons: ReactElement; // Actualizado para aceptar un elemento React
}

const Reference: React.FC<ReferenceProps> = ({ title, icons }) => {
  return (
    <div>
      {icons} {/* Usado directamente, sin <img> */}
      <h2>{title}</h2>
    </div>
  );
};

export default Reference;
