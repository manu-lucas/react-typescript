import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface PropsCardClientTwo {
  title?: string;
  titlesecond?: string;
  npedidos?: number;
  ventasTotal?: number;
  feedbackcliente?: number;
  afectacion?: number;
  deudaT?: number;
  deudaV?: number;
  aceptado?:number;
  enEspera?:number;
  enProceso?:number;
  anticipos?:number
}

const CardClienteTwo: React.FC<PropsCardClientTwo> = ({
  title,
  titlesecond,
  npedidos,
  ventasTotal,
  feedbackcliente,
  afectacion,
  deudaT,
  deudaV,
  aceptado,
  enEspera,
  enProceso,
  anticipos
}) => {
  return (
    <Card className=" w-80  my-5">
      <CardHeader className="pb-2 pt-1 px-2 flex flex-col">
        <h4 className="text-xs uppercase font-bold">{title}</h4>
        <h3 className="text-xs">{titlesecond}</h3>

       {  (title!=="Proyectos")&& <div>
          <p className="text-xs">Total Ventas {ventasTotal}</p>
          <p className="text-xs">N° de pedidos {npedidos}</p>
        </div>
         }
       

      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div>

        {  (title!=="Proyectos")&&<div> 
          <div className="mb-2">
            <h5 className="text-sm">Feedback clientes</h5>
            <p className="text-xs">{feedbackcliente}</p>
          </div>
          <div className="mb-2">
            <h5 className="text-sm">Afectación</h5>
            <p className="text-xs">{afectacion}</p>
          </div>
          <div className="mb-2">
            <h5 className="text-sm">Deuda Total</h5>
            <p className="text-xs">{deudaT}</p>
          </div>
          <div>
            <h5 className="text-sm">Deuda Vencida</h5>
            <p className="text-xs">{deudaV}</p>
          </div>
          </div>}
       

          


          {  (title==="Proyectos")&&
        <div>
          <div>  
          <p className="text-xs">Aceptado/Solicitado</p>
          <p> {aceptado}</p>
          </div>
          
          <p className="text-xs">En Espera{ enEspera}</p>
          <p className="text-xs">En Proceso{ enProceso}</p>
          <p className="text-xs">Anticipos{ anticipos}</p>

        </div>
         }  

        </div>
      </CardBody>
    </Card>
  );
};

export default CardClienteTwo;
