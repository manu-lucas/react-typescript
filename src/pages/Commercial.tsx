import React from 'react';
import Nav from '../components/Navegation/Nav';
import { Outlet } from 'react-router-dom'; // Importa Outlet
import Search from '../components/Navegation/Search';
import DateSelect from '../components/Navegation/DateSelect';



const Commercial: React.FC = () => {

    
  return (
<div className='containerHome'>
      <Nav />
      <Search/>
     <DateSelect/>
    <Outlet /> {/* Añade el Outlet aquí */}


</div>
  );
};

export default Commercial;
