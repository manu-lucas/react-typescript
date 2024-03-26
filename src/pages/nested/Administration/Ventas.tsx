import React, { useState, useEffect } from "react";
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";
import SearchSelect from "../../../components/Elements/Herramientas/SearchSelect";
import DateSelect from "../../../components/Elements/Herramientas/DateSelect";
import Search from "../../../components/Elements/Herramientas/Search";
import Button from "../../../components/Elements/Button/Button";
import AddInvoice from "../../../components/Elements/Tables/AddInvoice";

const Ventas: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const {data,isError,isLoading,error}=useGetOperaciones()
 

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error.message}</div>;

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <div className="flex flex-col w-full p-10">
        <div className="h-screen w-full bg-green-200 flex flex-row">
          <DateSelect />
          <div className="h-5">
            <Button name="+Agregar" changeState={toggleTransactionModal} />
          </div>
        </div>
        <div className="h-screen w-full bg-green-200 flex flex-row p-10">
          <Search onSearchChange={handleSearchChange} />
          <SearchSelect />
          <Button name="EMITIDAS" />
          <Button name="PENDIENTES" />
          <Button name="RECURRENTES" />
        </div>
        <TableAdministration searchValue={searchValue} />
        {showTransactionModal && (
          <div className="w-full absolute h-screen right-0 top-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg modal-content">
              <AddInvoice />
              <Button name="Cerrar" changeState={handleCloseTransactionModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ventas;
