import React from "react";
import Button from "../../components/Elements/Button/Button";
import DateSelect from "../../components/Elements/Herramientas/DateSelect";
import SelectStyle from "../../components/Elements/Herramientas/SelectNextUI";
import Productividad from "../../components/Elements/Graficos/Productividad";
import TablaComercialProyect from "../../components/Elements/Tables/TableComercialProyect";
import Search from "../../components/Elements/Herramientas/Search";
import {  Link } from 'react-router-dom';


const data = [
  { label: "Estafania", value: "default" },
  { label: "Veronica", value: "opcion1" },
  { label: "Juan Carlos", value: "opcion2" },
  { label: "Lucas", value: "opcion3" },
  { label: "Exequiel", value: "opcion4" },
  { label: "Martin", value: "opcion5" },
];

const Proyectos: React.FC = () => {
  return (
    <div className="h-screen w-85 overflow-y-auto	 ">
      <div className=" w-4/5	mx-auto mb-2   mt-6 rounded-3xl	 p-6 bg-white  shadow-7xl">  


      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row">
          <h2>Proyectos</h2>
          <h2>Consulta</h2>
          <h2>E-commerce</h2>
        </div>
        <div className="flex flex-row">
          <Button name="REPORTE" />
          <Link to="/comercial/proyecto"> <Button name="AGREGAR"  /></Link>

         
        </div>
      </div>

      <div className="w-full flex justify-end">
        <DateSelect />
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-row">
          <Button name="Todos" />
          <Button name="En Espera" />
          <Button name="Aceptado" />
          <Button name="Rechazado" />
        </div>
        <div className="flex flex-row">
          <div className="w-52"> 
          <SelectStyle data={data}  />
          </div>
          <Search/>
        </div>
      </div>
      <div></div>
      <div className="w-auto h-auto m-5">
        <TablaComercialProyect />
      </div>

<Productividad title="Productividad"/>

</div>

    </div>
  );
};

export default Proyectos;
