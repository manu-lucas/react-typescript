import React from 'react';
// import SearchSelect from '../../components/Elements/Herramientas/SearchSelect';
// import Search from '../../components/Elements/Herramientas/Search';
import CardClienteDGeneral from '../../components/Elements/Cards/CardClienteDGeneral';

const Ecommerce: React.FC  = () => {
  return (
    <div className="w-85		h-screen	 overflow-y-auto	">
      <h2>e-commerce</h2>
      {/* <SearchSelect />
      <Search/> */}
      <CardClienteDGeneral/>
    </div>
  );
};

export default Ecommerce;