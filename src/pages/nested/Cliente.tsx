import React from 'react';
import Button from '../../components/Elements/Button/Button';
import CardCliente from '../../components/Elements/Cards/CardCliente';
import CardClienteTwo from '../../components/Elements/Cards/CardClienteTwo';
import CardClienteThree from '../../components/Elements/Cards/CardCLienteThree';


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


<CardClienteTwo title="Clasificacion" titlesecond='Ranking'
 ventasTotal={14.688} npedidos={1} feedbackcliente={0} 
afectacion={0} deudaT={0} deudaV={0}
/>
<CardClienteTwo title="Proyectos" titlesecond='Sin Datos'    
aceptado={0} enEspera={0} enProceso={0} anticipos={0}  />

<CardClienteThree  />



</div>
  );
};

export default Cliente;
