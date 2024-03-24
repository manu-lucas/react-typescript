import React, { useState } from "react";
import Search from "../../../components/Elements/Herramientas/Search";
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";

import DateSelect from "../../../components/Elements/Herramientas/DateSelect";

interface DateState {
  dateStart: Date;
  dateEnd: Date;
}

const Ventas: React.FC = () => {
  const [fechas, setFechas] = useState<DateState>({
    dateStart: new Date(),
    dateEnd: new Date(),
  });
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  console.log("fechasssssssss",fechas)
  console.log("buscar",searchValue)

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <div className="flex flex-col w-full p-10">
        <DateSelect onchange={setFechas} />
        <Search onSearchChange={handleSearchChange} />

      </div>
      <TableAdministration searchValue={searchValue} />

      <div>

      </div>
    </div>
  );
};

export default Ventas;
