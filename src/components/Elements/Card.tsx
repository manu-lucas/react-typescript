import React from "react";
import '../../styles/elements/elements.scss'


interface Props {

}




const Card: React.FC<Props> = () => {
  return (
      <div className="cardDiv">

        <h3>Rentabilidad</h3>

      <select >
        <option value="">Este año</option>
        <option value="opcion1">Último 3 meses</option>
        <option value="opcion2">Último 6 meses</option>
        <option value="opcion3">Último 9 meses</option>
        <option value="default">Este año</option>
        <option value="opcion4">Año pasado</option>
        <option value="opcion5">Año antepasado</option>
      </select>

        <h2>5.366565412</h2>

        



      </div>
  );
};

export default Card;
