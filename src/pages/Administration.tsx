import React, { useState } from "react";
import Nav from "../components/Navegation/Nav";
import TableAdministration from "../components/Elements/Tables/TableAdministration";
import SearchSelect from "../components/Elements/Herramientas/SearchSelect";
import DateSelect from "../components/Elements/Herramientas/DateSelect";
import Search from "../components/Elements/Herramientas/Search";
import Button from "../components/Elements/Button/Button";
import Transaction from "../components/Elements/Tables/Transaction";

const Administration: React.FC = () => {
  const [showTransaction, setShowTransaction] = useState(false);

  const toggleTransaction = () => {
    setShowTransaction((prevState) => !prevState);
  };

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <Nav />
      <div className="flex flex-col w-full p-10">
        <div className="h-screen w-full bg-green-200 flex flex-row">
          <DateSelect />
          <div className="h-5">
            <Button name="+Transaccion" changeState={toggleTransaction} />
          </div>
        </div>
        <div className="h-screen w-full bg-green-200 flex flex-row p-10">
          <Search />
          <SearchSelect />
          <Button name="EMITIDAS" />
          <Button name="PENDIENTES" />
          <Button name="RECURRENTES" />
        </div>
        <TableAdministration />
        {showTransaction && <Transaction />}
      </div>
    </div>
  );
  //aa
};

export default Administration;
