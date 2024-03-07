import React from "react";
import '../../styles/elements/elements.scss'


interface ReferenceProps {
  title: string;
  icons: string;
}

const Reference: React.FC<ReferenceProps> = ({ title, icons }) => {
  return (
      <div className="centerDiv">
        <img src={icons} alt="Logo"/> 
        <h2>{title}</h2>
      </div>
  );
};

export default Reference;
