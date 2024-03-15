import React from "react";
import CardClienteDGeneral  from "../../../components/Elements/Cards/CardClienteDGeneral";
import CardClienteContacto from "../../../components/Elements/Cards/CardClienteContacto";

const Newcliente: React.FC = () => {
  return (
    <div className="w-full	bg-white	 h-screen absolute top-0 z-50	 overflow-y-auto 	">
   <h2 className="text-black m-5 font-semibold">Nuevo Clientes</h2>


      {/* <SearchSelect />
      <Search/> */}
      <CardClienteDGeneral   />
      <CardClienteContacto />


   
    </div>
  );
};

export default Newcliente;
