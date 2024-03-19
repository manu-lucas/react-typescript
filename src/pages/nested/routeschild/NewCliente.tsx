import React from "react";
import CardClienteDGeneral  from "../../../components/Elements/Cards/CardClienteDGeneral";
import CardClienteContacto from "../../../components/Elements/Cards/CardClienteContacto";
import Button from "../../../components/Elements/Button/Button";
import ButtonCreate from "../../../components/Elements/Button/Button_create";

const Newcliente: React.FC = () => {
  return (
    <div className="w-85	bg-white	 h-screen absolute top-0 z-50	 overflow-y-auto 	">
   <h2 className="text-black m-5 font-semibold">Nuevo Cliente</h2>


      {/* <SearchSelect />
      <Search/> */}
      <CardClienteDGeneral   />
      <CardClienteContacto />
      <ButtonCreate name="Crear" />


   
    </div>
  );
};

export default Newcliente;
