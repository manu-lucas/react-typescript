import React, { useState } from "react";
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";
import SearchSelect from "../../../components/Elements/Herramientas/SearchSelect";
import DateSelect from "../../../components/Elements/Herramientas/DateSelect";
import Search from "../../../components/Elements/Herramientas/Search";
import Button from "../../../components/Elements/Button/Button";
import Transaction from "../../../components/Elements/Tables/Transaction";
import { useGetOperaciones, getResBank } from "../../../api/Request";
import { useQuery } from "@tanstack/react-query";

interface DateState {
  dateStart: Date;
  dateEnd: Date;
}

const Cobros: React.FC = () => {
  const [fechas, setFechas] = useState<DateState>({
    dateStart: new Date(),
    dateEnd: new Date(),
  });

  const [searchValue, setSearchValue] = useState("");
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  const { data: operacionesData, isError: operacionesIsError, isLoading: operacionesIsLoading, error: operacionesError } = useGetOperaciones();
  const { data: bankData, isError: bankIsError, isLoading: bankIsLoading, error: bankError } = getResBank();

  // Gestión de los estados de carga y error para cada consulta
  if (operacionesIsLoading || bankIsLoading) return <div>Loading...</div>;
  if (operacionesIsError) return <div>Error: {operacionesError.message}</div>;
  if (bankIsError) return <div>Error: {bankError.message}</div>;

  function changeStateModal() {
    setShowTransactionModal(!showTransactionModal);
  }
  const handleCloseOnClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Se asegura que el evento se dispare solo cuando se clickea fuera del contenido del modal
    if (e.target === e.currentTarget) {
      changeStateModal?.(); // Llama a la función changeState si se proporciona
    }
  };

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <div className="flex flex-col w-full p-10">
        <div className="h-screen w-full bg-green-200 flex flex-row">
          <DateSelect onchange={setFechas} />
          <div className="h-5">
            <Button name="+Transaccion" changeState={changeStateModal} />
          </div>
        </div>
        <div className="h-screen w-full bg-green-200 flex flex-row p-10">
          <Search onSearchChange={setSearchValue} />
          <SearchSelect />
          <Button name="EMITIDAS" />
          <Button name="PENDIENTES" />
          <Button name="RECURRENTES" />
        </div>
        <TableAdministration
          searchValue={searchValue}
          data={operacionesData}
          fechas={fechas}
        />
      </div>
      {showTransactionModal && (
        <div
          className="w-full absolute h-screen right-0 top-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
          onClick={handleCloseOnClickOutside}
        >
          <div
            className="bg-white p-8 rounded-lg modal-content "
            onClick={(e) => e.stopPropagation()}
          >
            <Transaction data={bankData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cobros;
