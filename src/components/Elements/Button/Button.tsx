import { useState } from "react";

interface Props {
  name: string;
  changeState?: () => void;
}

const Button: React.FC<Props> = ({ name, changeState }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the active state
    changeState && changeState(); // Call the changeState function if it's provided
  };

  return (
    <div
      className={`border h-10 rounded-2xl inline-block px-2 py-1 text-white cursor-pointer transition-colors ${
        isActive ? "bg-blue-500 shadow-md" : "bg-slate-500"
      }`}
      onClick={handleClick}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Button;
