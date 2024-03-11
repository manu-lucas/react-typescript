import React from 'react';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Button from '../Button/Button';



interface PropsCardClient {
  title?: string;
  razon?: string;
  rut?: string;
  direccion?: string;
  linea?: string;
  notas?:string;
  otproceso?:string;
  titleOne?:string
  }

const CardCliente: React.FC<PropsCardClient> = ({title,razon,rut,direccion,linea,  notas,otproceso,titleOne}) => {

    
  return (
    <Card className=" w-80  my-5 h-full	">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="text-tiny uppercase font-bold">{title}</h4>

      {(title ==="Informacion")&&<h4 className="text-large">Razón Legal {razon}</h4>}
      {(title === "Informacion")&&<h4 className=" text-large">Rut {rut}</h4>}
      {(title === "Informacion")&&<h4 className=" text-large">Contacto </h4>}
      {(title === "Informacion")&&<h4 className=" text-large">Dirección {direccion}</h4>}
      {(title === "Informacion")&&<h4 className=" text-large">Línea de Credito  $ {linea}</h4>}
      <h4 className=" text-large"> {notas}</h4>
      {otproceso &&<p className="text-large">{otproceso} </p>  }

    </CardHeader>
    <CardBody className="overflow-visible py-2">
    
    {(titleOne)&&<h4>Facturas Recurrentes</h4>}
    {(titleOne)&&<Button   name= "Ver Todas Las Facturas"/>
}

    </CardBody>
  </Card>
);
  
};

export default CardCliente;
