import React from "react";


interface ReferenceProps {
  title: string;
  icons: string;
}

const Reference: React.FC<ReferenceProps> = ({ title, icons }) => {
  return (
      <div >
        <img src={icons} alt="Logo"/> 
        <h2>{title}</h2>
      </div>
  );
};

export default Reference;
