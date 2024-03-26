import React, { useState, startTransition } from "react";
import { useNavigate, Outlet } from "react-router-dom"; // Import Link from react-router-dom
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";
import DateSelect from "../../../components/Elements/Herramientas/DateSelect";
import Search from "../../../components/Elements/Herramientas/Search";
import Button from "../../../components/Elements/Button/Button";

const Ventas: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  // Function to handle navigation wrapped in startTransition
  const handleNavigate = () => {
    startTransition(() => {
      navigate("/administration/ventas");
    });
  };
  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <div className="flex flex-col w-full p-10">
        <div className="h-screen w-full bg-green-200 flex flex-row">
          <DateSelect />
          <div className="h-5">
            {/* Use the handleNavigate function on an element's click event */}
            <button onClick={handleNavigate}>+Agregar</button>
          </div>
        </div>
        <div className="h-screen w-full bg-green-200 flex flex-row p-10">
          <Search onSearchChange={handleSearchChange} />

          <Button name="EMITIDAS" />
          <Button name="PENDIENTES" />
          <Button name="RECURRENTES" />
        </div>
        <TableAdministration searchValue={searchValue} />
      </div>
      <Outlet />
    </div>
  );
};

export default Ventas;
