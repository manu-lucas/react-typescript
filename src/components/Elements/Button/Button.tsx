import { useState } from "react";

interface Props {
  name: string;
  changeState?: () => void; // Se sugiere que esta prop pueda ser opcional
}

const Button: React.FC<Props> = ({ name, changeState }) => {
  const [stateCondicional, setstateCondicional] = useState(false);

  function changeColorState() {
    setstateCondicional(!stateCondicional);
    if (changeState) {
      changeState(); // Invoca la función pasada como prop
    }
  }

  return (
    <div
      className={`border rounded-2xl inline-block px-2 text-white 
      ${stateCondicional ? "bg-blue-500" : "bg-slate-400"}
      cursor-pointer`}
      onClick={changeColorState} // Corrección aquí para asegurarse de que la función se llame correctamente
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Button;
