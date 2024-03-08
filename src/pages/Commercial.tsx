import React from 'react';
import Nav from '../components/Navegation/Nav';
import { Outlet } from 'react-router-dom'; // Importa Outlet


const Commercial: React.FC = () => {

    
  return (
<div className='containerHome'>
     <Nav/>

    <Outlet /> {/* Añade el Outlet aquí */}


</div>
  );
};

export default Commercial;
