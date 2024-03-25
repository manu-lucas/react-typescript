import React, { useState } from "react";
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";
import SearchSelect from "../../../components/Elements/Herramientas/SearchSelect";
import DateSelect from "../../../components/Elements/Herramientas/DateSelect";
import Search from "../../../components/Elements/Herramientas/Search";
import Button from "../../../components/Elements/Button/Button";
import Transaction from "../../../components/Elements/Tables/Transaction";
import { getOperaciones, getBank } from "../../../api/Request";
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

  const operacionesQuery = useQuery({
    queryKey: ["operaciones"],
    queryFn: getOperaciones,
  });

  const bankQuery = useQuery({
    queryKey: ["bank"],
    queryFn: getBank,
  });

  // Gestión de los estados de carga y error para cada consulta
  if (operacionesQuery.isLoading || bankQuery.isLoading)
    return <div>Loading...</div>;
  if (operacionesQuery.isError)
    return <div>Error: {operacionesQuery.error.message}</div>;
  if (bankQuery.isError) return <div>Error: {bankQuery.error.message}</div>;

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
          data={operacionesQuery.data}
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
            <Transaction data={bankQuery.data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cobros;
