import React from 'react';
import Button from '../../components/Elements/Button/Button';
import CardCliente from '../../components/Elements/Cards/CardCliente';


const Cliente: React.FC = () => {

    
  return (
<div  className='w-full	bg-slate-200		h-screen		'>
<h2>Clientes</h2>
<Button   name= "Resumenes"/>
<Button   name= "Proyectos"/>
<Button   name= "Facturas"/>
<Button   name= "Nuevo Proyecto"/>
<Button   name= "Nueva Factura"/>


<CardCliente    title="Informacion" razon="Actividades" rut="4344343" direccion='Rio Limay' linea="San"/>

<CardCliente    title="Notas" notas="No hay ninguna nota o archivo adjunto"/>
<CardCliente    title="OT en proceso" otproceso="#61 - ABARROTES ANDREA IBAÑEZ ESPINOZA E.I.R.L.
Estado: Aceptado"   titleOne="Facturas Recurrentes"    />







</div>
  );
};

export default Cliente;
