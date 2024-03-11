import React from 'react';
import Nav from '../components/Navegation/Nav';
import { Outlet } from 'react-router-dom'; // Importa Outlet
import Search from '../components/Elements/Herramientas/Search';
import DateSelect from '../components/Elements/Herramientas/DateSelect';
import SearchSelect from '../components/Elements/Herramientas/SearchSelect';
import SelectPeriod from '../components/Elements/Herramientas/SelectPeriod';



const Commercial: React.FC = () => {

    
  return (
<div className='containerHome'>
      <Nav />
      <Search />
      <DateSelect />
      <SearchSelect />
      <SelectPeriod/>
     
    <Outlet /> {/* Añade el Outlet aquí */}


</div>
  );
};

export default Commercial;
