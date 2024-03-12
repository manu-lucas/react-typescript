import React from "react";
import { CardClienteContacto } from "../../../components/Elements/Cards/CardClienteContacto";

const Newcliente: React.FC = () => {
  return (
    <div className="w-full	bg-white	 h-screen absolute top-0 z-50	 	">
   <h2 className="text-black">Nuevos Clientes</h2>


    <h2>newClient</h2>
      {/* <SearchSelect />
      <Search/> */}
      <CardClienteContacto/>


   
    </div>
  );
};

export default Newcliente;
