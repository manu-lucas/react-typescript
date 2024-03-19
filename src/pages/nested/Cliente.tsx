import React from "react";
import Button from "../../components/Elements/Button/Button";
import CardCliente from "../../components/Elements/Cards/CardCliente";
import CardClienteTwo from "../../components/Elements/Cards/CardClienteTwo";
import CardClienteThree from "../../components/Elements/Cards/CardCLienteThree";
import { Outlet } from "react-router-dom"; // Importa Outlet
import {  Link } from 'react-router-dom';

const Cliente: React.FC = () => {
  return (
    <div className="w-85		h-screen	 overflow-y-auto	">
      <div
        className=" w-10/12		h-screen  mx-auto
      "
      >
        <div className="flex flex-row">
          <h2>Clientes</h2>
          <h2>/Información Detallada</h2>
        </div>

        <div className="flex flex-row">
        <Link to="/comercial/cliente/nuevocliente">  <Button name="+ Agregar" /></Link>

         

        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-row">
            <Button name="Resumenes" />
            <Button name="Proyectos" />
            <Button name="Facturas" />
          </div>

          <div className="flex flex-row">
            <Button name="Nuevo Proyecto" />
            <Button name="Nueva Factura" />
          </div>
        </div>

        {/*---------------------------------*/}

        <div className="flex flex-row  my-5 justify-center">
          <div className="flex flex-col m-[5px]">
            <CardCliente
              title="Informacion"
              razon="Actividades"
              rut="4344343"
              direccion="Rio Limay"
              linea="San"
            />

            <CardCliente
              title="Notas"
              notas="No hay ninguna nota o archivo adjunto"
            />
          </div>
          <div className="flex flex-col m-[10px]">
            <CardClienteTwo
              title="Clasificacion"
              titlesecond="Ranking"
              ventasTotal={14.688}
              npedidos={1}
              feedbackcliente={0}
              afectacion={0}
              deudaT={0}
              deudaV={0}
            /></div>
          <div className="flex flex-col m-[10px]">
            <CardClienteTwo
              title="Proyectos"
              titlesecond="Sin Datos"
              aceptado={0}
              enEspera={0}
              enProceso={0}
              anticipos={0}
            />
          </div>
        </div>
        {/*---------------------------------*/}

        <div className="flex flex-row justify-between  h-96	 ">
          <CardCliente
            title="OT en proceso"
            otproceso="#61 - ABARROTES ANDREA IBAÑEZ ESPINOZA E.I.R.L.
Estado: Aceptado"
            titleOne="Facturas Recurrentes"
          />
          <CardClienteThree />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Cliente;
