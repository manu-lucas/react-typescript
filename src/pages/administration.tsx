import React from "react";
import Nav from "../components/Navegation/Nav";
import Testing from "../components/Elements/Tables/TableAdministration";
import SearchSelect from "../components/Elements/Herramientas/SearchSelect";
import DateSelect from "../components/Elements/Herramientas/DateSelect";
import Search from "../components/Elements/Herramientas/Search";
import Button from "../components/Elements/Button/Button";
import Transaction from "../components/Elements/Tables/Transaction";

const Administration: React.FC = () => {
  return (
    <div className="h-screen w-full  bg-green-200 flex flex-row ">
      <Nav />
      <div className="flex flex-col w-full p-10">
        {" "}
        <div className="h-screen w-full bg-green-200 flex flex-row ">
          <DateSelect />
        </div>
        <div className="h-screen w-full bg-green-200 flex flex-row p-10">
          <Search />
          <SearchSelect />
          <Button name={"EMITIDAS"} />
          <Button name={"PENDIENTES"} />
          <Button name={"RECURRENTES"} />
        </div>
        <Testing />
        <Transaction />
      </div>
    </div>
  );
};

export default Administration;
