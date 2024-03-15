import React from "react";
import SelectStyle from "../Herramientas/SelectNextUI";

interface Props {
  title: string;
  total: number;
  conciliado?:number;
  otros?:number
}

const data = [
  { label: "Este año", value: "default" },
  { label: "Último 3 meses", value: "opcion1" },
  { label: "Último 6 meses", value: "opcion2" },
  { label: "Último 9 meses", value: "opcion3" },
  { label: "Año pasado", value: "opcion4" },
  { label: "Año antepasado", value: "opcion5" },
];

const Card: React.FC<Props> = ({ title, total,conciliado,otros }) => {

  return (
    <div className="w-72	 h-52 bg-white shadow-7xl rounded-3xl	 pt-5  pl-5 pr-5   min-w-64	">
      <div className="flex flex-row w-full justify-between">
        <h3>{title}</h3>
        <div className="w-32">
          { title!=="Documentos de venta"&&
          <SelectStyle data={data} />}
        </div>
      </div>
      <h3>${total}</h3>
      { title==="Documentos de venta"&& <p className="text-gray-400	">por cobrar</p>}
      {(title==="Rentabilidad") &&
      <h2 className="bg-slate-400	 w-32 rounded-full">{conciliado}% conciliado</h2>}
      {(title==="Gastos") &&
      <div>  
      <div className="flex flex-row items-center">  
      <div className="w-4 h-4 bg-red-600 rounded-full mr-1"></div>
      <h2 className="">${otros}</h2>
      </div>
      <p className="text-gray-400	text-sm	">Otros</p>
      </div>
      }


    </div>
  );
};

export default Card;
