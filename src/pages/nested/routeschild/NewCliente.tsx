import React from "react";
import { CardClienteContacto } from "../../../components/Elements/Cards/CardClienteContacto";
import TableTestSort from "../../../components/Elements/Tables/TableTestSort";
import FormikTest from "../../../components/Elements/Tables/FormikTest";

const Newcliente: React.FC = () => {
  return (
    <div className="w-full	bg-white	 h-screen absolute top-0 z-50	 	">
   <h2 className="text-black">Nuevos Clientes</h2>


    <h2>newClient</h2>
      {/* <SearchSelect />
      <Search/> */}
     {/*  <CardClienteContacto /> */}
      <TableTestSort />
      <FormikTest />


   
    </div>
  );
};

export default Newcliente;
