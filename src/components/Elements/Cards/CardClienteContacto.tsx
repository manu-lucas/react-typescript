import React from 'react';
import { Card , CardHeader} from "@nextui-org/react";

interface PropsDatosGenerales {
  razon?: string;
  rut?: string;
  giro?: string;
  direccion?: string;
  comuna?: string;
  ciudad?: string;
  nombre?: string;
  email?: string;
  celular?: string;
  telefono?: string;
  vendedor?: string;
}

const CardClienteContacto: React.FC<PropsDatosGenerales> = ({ razon, rut, giro, direccion, comuna, ciudad, nombre, email, celular, telefono, vendedor }) => {

  return (
    
    <Card className = "py-4 inline-block w-96 m-5 flex" >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-tiny uppercase font-bold" >  Datos Generales  </h4>
        <h4 className="text-large">Razón Social: {razon}</h4>
        <h4 className="text-large">Rut: {rut}</h4>
        <h4 className="text-large">Giro: {giro}</h4>
        <h4 className="text-large">Dirección: {direccion}</h4>
        <h4 className="text-large">Comuna: {comuna}</h4>
        < h4 className = "text-large" > Ciudad: { ciudad } </h4>
        <h4 className="text-tiny uppercase font-bold">Contacto</h4>
        <h4 className="text-large">Nombre: {nombre}</h4>
        <h4 className="text-large">Email: {email}</h4>
        <h4 className="text-large">Celular: {celular}</h4>
        <h4 className="text-large">Teléfono: {telefono}</h4>
        <h4 className="text-large">Vendedor: {vendedor}</h4>
      </CardHeader>
    </Card>
      );
};

export { CardClienteContacto };


