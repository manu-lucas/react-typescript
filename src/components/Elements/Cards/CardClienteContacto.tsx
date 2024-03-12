import React, { useState } from 'react';
import { Card, CardHeader, Accordion, AccordionItem } from "@nextui-org/react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';



interface PropsDatosGenerales {
  razon?: string;
  rut?: string;
  giro?: string;
  direccion?: string;
  comuna?: string;
  ciudad?: string;
  nombre?: string;
  email?: string;
  /* celular?: string; */
  telefono?: string;
  vendedor?: string;
}


const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


const CardClienteContacto: React.FC<PropsDatosGenerales> = ({ razon: razonInicial = "", rut: rutInicial = "", giro: giroInicial = "", direccion: direccionInicial = "", comuna: comunaInicial = "", ciudad: ciudadInicial = "", nombre: nombreInicial = "", email: emailInicial = "", telefono: telefonoInicial = "", vendedor: vendedorInicial = "" }) => {
  
  const [razon, setRazon] = useState<string>(razonInicial);
  const [rut, setRut] = useState<string>(rutInicial);
  const [giro, setGiro] = useState<string>(giroInicial);
  const [direccion, setDireccion] = useState<string>(direccionInicial);
  const [comuna, setComuna] = useState<string>(comunaInicial);
  const [ciudad, setCiudad] = useState<string>(ciudadInicial);
  const [nombre, setNombre] = useState<string>(nombreInicial);
  const [email, setEmail] = useState<string>(emailInicial);
  const [phone, setPhone] = useState<string>(''); // State for phone number
  const [telefono, setTelefono] = useState<string>(telefonoInicial);
  const [vendedor, setVendedor] = useState<string>(vendedorInicial);

  return (
    <Card className="py-4 w-full m-5  ">
      <CardHeader className="pb-4 pt-2 px-4 ">
        <div className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h1 className="text-lg font-bold p-4">Datos Generales</h1>
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Razón Social" value={razon} onChange={(e) => setRazon(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Giro" value={giro} onChange={(e) => setGiro(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Comuna" value={comuna} onChange={(e) => setComuna(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h1 className="text-lg font-bold p-4">Contacto</h1>
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input className="text-large my-2 p-1 border rounded-md" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
           <PhoneInput
          defaultCountry="ua"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
            placeholder: "Celular"
          }}
        /> 
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
