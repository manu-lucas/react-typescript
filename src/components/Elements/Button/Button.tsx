import React from "react";

interface Props {
  name: string;
}

const Button: React.FC<Props> = ({ name }) => {
  return (
    <div className="border rounded-2xl	 inline-block px-2 bg-slate-500	 text-white	">
      <h3>{name}</h3>
    </div>
  );
};

export default Button;
