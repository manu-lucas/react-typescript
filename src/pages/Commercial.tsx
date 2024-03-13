import React from 'react';
import Nav from '../components/Navegation/Nav';
import { Outlet } from 'react-router-dom'; // Importa Outlet
import Proyectos from './nested/Proyectos';
// import Search from '../components/Elements/Herramientas/Search';
// import DateSelect from '../components/Elements/Herramientas/DateSelect';
// import SearchSelect from '../components/Elements/Herramientas/SearchSelect';
// import SelectPeriod from '../components/Elements/Herramientas/SelectPeriod';
// import { CardClienteContacto } from '../components/Elements/Cards/CardClienteContacto';



const Commercial: React.FC = () => {
    
  return (
<div className='h-screen w-full bg-blue-200 flex flex-row'>
      <Nav />

    <Proyectos />
      {/* <Search />
      <DateSelect />
      <SearchSelect />

      <SelectPeriod />
      <CardClienteContacto razon='acaca' rut='asfdsadf' direccion='dsafads'/>
 */}     
          <div className="flex-grow"> {/* This div will take up the remaining space */}

    <Outlet  /> 

</div>
</div>
  );
};

export default Commercial;
