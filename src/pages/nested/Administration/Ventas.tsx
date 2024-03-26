import React, { useState } from "react";
import Search from "../../../components/Elements/Herramientas/Search";
import DateSelect from "../../../components/Elements/Herramientas/DateSelect";
import { useGetOperaciones } from "../../../api/Request";
import TableAdministration from "../../../components/Elements/Tables/TableAdministration";

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
  const navigate = useNavigate(); // Get the navigate function

  const { data, isError, isLoading, error } = useGetOperaciones();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error.message}</div>;

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <div className="flex flex-col w-full p-10">
        <DateSelect onchange={setFechas} />
        <Search onSearchChange={setSearchValue} />
        <TableAdministration
          searchValue={searchValue}
          data={data}
          fechas={fechas}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Ventas;
