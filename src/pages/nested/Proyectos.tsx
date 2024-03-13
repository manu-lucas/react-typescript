import React from "react";
import Button from "../../components/Elements/Button/Button";
import DateSelect from "../../components/Elements/Herramientas/DateSelect";
import SelectStyle from "../../components/Elements/Herramientas/SelectNextUI";
import Productividad from "../../components/Elements/Graficos/Productividad";
import TablaComercialProyect from "../../components/Elements/Tables/TableComercialProyect";

const Proyectos: React.FC = () => {
  return (
    <div className="h-screen w-full ">      
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row">
          <h2>Proyectos</h2>
          <h2>Consulta</h2>
          <h2>E-commerce</h2>
        </div>
        <div className="flex flex-row">
          <Button name="REPORTE" />
          <Button name="AGREGAR" />
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
          <SelectStyle />
          {/* <Search/> */}
        </div>
      </div>
      <div></div>
      <div className="w-auto h-auto m-5">
        <TablaComercialProyect />
      </div>
<Productividad title="Productividad"/>
    </div>
  );
};

export default Proyectos;
