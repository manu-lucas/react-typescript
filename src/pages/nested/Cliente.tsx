import React from "react";
import Button from "../../components/Elements/Button/Button";
import CardCliente from "../../components/Elements/Cards/CardCliente";
import CardClienteTwo from "../../components/Elements/Cards/CardClienteTwo";
import CardClienteThree from "../../components/Elements/Cards/CardCLienteThree";
import SearchSelect from "../../components/Elements/Herramientas/SearchSelect";

const Cliente: React.FC = () => {
  return (
    <div className="w-full		h-screen		">
      <div className=" w-10/12		h-screen  mx-auto
      ">
        <div className="flex flex-row">
          <h2>Clientes</h2>
          <h2>/Información Detallada</h2>
        </div>

      <div>
        <SearchSelect />
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

  {/*---------------------------------*/ }

        <div className="flex flex-row  my-5 justify-between">
          <div className="flex flex-col ">
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

          <CardClienteTwo
            title="Clasificacion"
            titlesecond="Ranking"
            ventasTotal={14.688}
            npedidos={1}
            feedbackcliente={0}
            afectacion={0}
            deudaT={0}
            deudaV={0}
          />

          <CardClienteTwo
            title="Proyectos"
            titlesecond="Sin Datos"
            aceptado={0}
            enEspera={0}
            enProceso={0}
            anticipos={0}
          />
        </div>
  {/*---------------------------------*/ }

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
    </div>
  );
};

export default Cliente;
