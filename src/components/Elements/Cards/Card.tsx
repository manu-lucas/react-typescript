import React from "react";
import SelectStyle from "../Herramientas/SelectNextUI";
import { LineChartComponent } from "../Graficos/LineChartComponent";

interface Props {
  title?: string;
  titleSecondary?: string;
  total?: number;
  conciliado?: number;
  otros?: number;
  id?:number
}
const data1 = [{ name: '01/03', uv: 0, pv: 2400, amt: 2400 }, { name: '04/03', uv: 300, pv: 1388, amt: 2210 }, { name: '07/03', uv: 300, pv: 9800, amt: 2290 }, { name: '10/03', uv: 300, pv: 3908, amt: 2000 }, { name: '13/03', uv: 189, pv: 4800, amt: 2181 }, { name: '16/03', uv: 239, pv: 3800, amt: 2500 }, { name: '23/03', uv: 349, pv: 4300, amt: 2100 }];
const data2 = [{ name: 'Actual', uv: 180, pv: 2400, amt: 2400 }, { name: '30 días', uv: 180, pv: 1388, amt: 2210 }, { name: '60 días', uv: 180, pv: 9800, amt: 2290 }, { name: '90 días', uv: 180, pv: 3908, amt: 2000 }];

const data = [
  { label: "Este año", value: "default" },
  { label: "Último 3 meses", value: "opcion1" },
  { label: "Último 6 meses", value: "opcion2" },
  { label: "Último 9 meses", value: "opcion3" },
  { label: "Año pasado", value: "opcion4" },
  { label: "Año antepasado", value: "opcion5" },
];

const periodo = [
  { label: "Mensual", value: "opcion0" },
  { label: "Trimestral", value: "opcion1" },
  { label: "Anual", value: "opcion2" },
];

const Card: React.FC<Props> = ({
  title,
  total,
  conciliado,
  otros,
  titleSecondary,id
}) => {
  return (
    <div
      className={`${
        (titleSecondary||id) ? "w-140 h-72" : "w-80 h-52"
      }  bg-white shadow rounded-3xl pt-5 pl-5 pr-5 min-w-64`}
    >
      <div className="flex flex-row w-full  justify-around">
        <h3>{title}</h3>
        <h3>{titleSecondary}</h3>
        {(title !== "Documentos de venta" && !titleSecondary &&!id) && (
          <div className="w-36">
            <SelectStyle data={data} />
          </div>
        )}
        {titleSecondary && (
          <div className="w-32">
            <SelectStyle data={periodo} />
          </div>
        )}
      </div>
     
      {!titleSecondary &&<h3>${total}</h3>}
      {title === "Documentos de venta" && (
        <p className="text-gray-400	">por cobrar</p>
      )}
      {title === "Rentabilidad" && (
        <div>
          <h2 className="bg-slate-400	 w-32 rounded-full">
            {conciliado}% conciliado
          </h2>
        </div>
      )}
      {title === "Gastos" && (
        <div>
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 bg-red-600 rounded-full mr-1"></div>
            <h2 className="">${otros}</h2>
          </div>
          <p className="text-gray-400	text-sm	">Otros</p>
        </div>
      )}
       {titleSecondary&&<div>
        {/* <LineChartComponent data={data1} /> */}
        <LineChartComponent data={data1}/>

        </div>}
        {id&&<div>
        {/* <LineChartComponent data={data1} /> */}
        <LineChartComponent data={data2}/>
        
        </div>}


    </div>
  );
};

export default Card;
