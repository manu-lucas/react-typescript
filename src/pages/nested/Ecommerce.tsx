import React from 'react';
import SearchSelect from '../../components/Elements/Herramientas/SearchSelect';
import Search from '../../components/Elements/Herramientas/Search';
import { CardClienteContacto } from '../../components/Elements/Cards/CardClienteContacto';

const Ecommerce: React.FC  = () => {
  return (
    <div>
      <h2>e-commerce</h2>
      {/* <SearchSelect />
      <Search/> */}
      <CardClienteContacto/>
    </div>
  );
};

export default Ecommerce;