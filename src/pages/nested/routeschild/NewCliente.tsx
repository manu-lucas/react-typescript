import React from "react";
import CardClienteDGeneral  from "../../../components/Elements/Cards/CardClienteDGeneral";

const Newcliente: React.FC = () => {
  return (
    <div className="w-full	bg-white	 h-screen absolute top-0 z-50	 	">
   <h2 className="text-black">Nuevos Clientes</h2>


    <h2>newClient</h2>
      {/* <SearchSelect />
      <Search/> */}
      <CardClienteDGeneral   />


   
    </div>
  );
};

export default Newcliente;
