import React from "react";
import Button from "../../components/Elements/Button/Button";

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




    </div>
  );
};

export default Proyectos;
