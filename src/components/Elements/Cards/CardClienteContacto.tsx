import React, { useState } from 'react';
import { Card, CardHeader, Accordion, AccordionItem } from "@nextui-org/react";


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


const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


const CardClienteContacto: React.FC<PropsDatosGenerales> = ({ razon: razonInicial = "", rut: rutInicial = "", giro: giroInicial = "", direccion: direccionInicial = "", comuna: comunaInicial = "", ciudad: ciudadInicial = "", nombre: nombreInicial = "", email: emailInicial = "", celular: celularInicial = "", telefono: telefonoInicial = "", vendedor: vendedorInicial = "" }) => {
  const [razon, setRazon] = useState<string>(razonInicial);
  const [rut, setRut] = useState<string>(rutInicial);
  const [giro, setGiro] = useState<string>(giroInicial);
  const [direccion, setDireccion] = useState<string>(direccionInicial);
  const [comuna, setComuna] = useState<string>(comunaInicial);
  const [ciudad, setCiudad] = useState<string>(ciudadInicial);
  const [nombre, setNombre] = useState<string>(nombreInicial);
  const [email, setEmail] = useState<string>(emailInicial);
  const [celular, setCelular] = useState<string>(celularInicial);
  const [telefono, setTelefono] = useState<string>(telefonoInicial);
  const [vendedor, setVendedor] = useState<string>(vendedorInicial);

  return (
    <Card className="py-4 w-full m-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start flex">
        <div className="flex flex-1 flex-row">
          <h1 className="text-lg font-bold">Datos Generales</h1>
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Razón Social" value={razon} onChange={(e) => setRazon(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Giro" value={giro} onChange={(e) => setGiro(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Comuna" value={comuna} onChange={(e) => setComuna(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        </div>
        <div className="flex flex-1 flex-row ">
          <h1 className="text-lg font-bold">Contacto</h1>
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Celular" value={celular} onChange={(e) => setCelular(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Vendedor" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />
        </div>
      </CardHeader>
    
    <Accordion isCompact className="w-full ">
       <AccordionItem key="1" title={<div className="w-28 border border-gray-300 rounded-md p-2">Advanced configuration</div>}>
        {defaultContent}
      </AccordionItem>
      </Accordion>
      </Card>
  );
};

export { CardClienteContacto };
