import React, { useState, useEffect } from "react";
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";
import SearchSelect from "../../../components/Elements/Herramientas/SearchSelect";
import DateSelect from "../../../components/Elements/Herramientas/DateSelect";
import Search from "../../../components/Elements/Herramientas/Search";
import Button from "../../../components/Elements/Button/Button";
import Transaction from "../../../components/Elements/Tables/Transaction";

const Cobros: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const [showTransactionModal, setShowTransactionModal] = useState(false);

  const toggleTransactionModal = () => {
    setShowTransactionModal(!showTransactionModal);
  };

  const handleCloseTransactionModal = () => {
    setShowTransactionModal(false);
  };

  useEffect(() => {
    const handleCloseOnClickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest(".modal-content")
      ) {
        setShowTransactionModal(false);
      }
    };

    if (showTransactionModal) {
      document.addEventListener("mousedown", handleCloseOnClickOutside);
    } else {
      document.removeEventListener("mousedown", handleCloseOnClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseOnClickOutside);
    };
  }, [showTransactionModal]);

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <div className="flex flex-col w-full p-10">
        <div className="h-screen w-full bg-green-200 flex flex-row">
          <DateSelect />
          <div className="h-5">
            <Button name="+Transaccion" changeState={toggleTransactionModal} />
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
              <Transaction />
              <Button name="Cerrar" changeState={handleCloseTransactionModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cobros;
