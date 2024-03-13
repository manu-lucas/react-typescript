import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import TableCliente from "../Tables/TableCliente";
import TablaClientePaginado from "../Tables/TablaClientePaginado";
import SelectPeriod from "../Herramientas/SelectPeriod";
import DateSelect from "../Herramientas/DateSelect";

interface PropsCardClientThree {}

const CardClienteThree: React.FC<PropsCardClientThree> = () => {
  const [tareasActivo, setTareasActivo] = useState(false);

  return (
    <Card className="w-8/12		h-full my-5">
      <CardHeader className="pb-2 pt-1 px-2 flex flex-col">
        <div className="flex flex-row">
          <h4 className={`text-xs uppercase font-bold mx-5 mt-5 cursor-pointer ${
              tareasActivo ? "text-blue-500" : "text-black"
            }`}
            onClick={() => setTareasActivo(true)}
          >
            Tareas
          </h4>
          <h4
            className={`text-xs uppercase font-bold mx-5  mt-5 cursor-pointer ${
              !tareasActivo ? "text-blue-500" : "text-black"
            }`}
            onClick={() => setTareasActivo(false)}
          >
            Cobros
          </h4>
          <SelectPeriod />
        </div>
        <div>
          <DateSelect />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {tareasActivo && (
          <div>
            <TableCliente />
          </div>
        )}

        {!tareasActivo && (
          <div>
            <TablaClientePaginado />
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default CardClienteThree;
