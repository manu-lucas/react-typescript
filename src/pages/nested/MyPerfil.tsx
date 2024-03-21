import React from "react";
import { dataPermiso } from "../../components/Elements/Herramientas/data";
import { Accordion, AccordionItem } from "@nextui-org/react";

console.log(dataPermiso.permisos);
interface DatosProps {
  name: string;
  email: string;
  phone: string;
  cargo: string;
  fnacimiento: string; // Assuming format is suitable for display
  status: string;
}

function MyDatos({
  name,
  email,
  phone,
  cargo,
  fnacimiento,
  status,
}: DatosProps) {
  return (
    <div className="flex flex-row bg-slate-50 rounded-3xl p-4 items-center space-x-4">
      <div className="w-20 h-20 bg-slate-400 rounded-full overflow-hidden">
        <img src="" alt="Picture" className="w-full h-full object-cover" />{" "}
        {/* Mejora para mostrar la imagen correctamente */}
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold">{name}</h4>{" "}
        {/* Añadir estilos para el título */}
        <p>{email}</p> {/* Cambiar h4 por p para los valores */}
        <p>{phone}</p>
      </div>
      <div className="space-y-1">
        <p>
          <span className="font-semibold">Cargo:</span> {cargo}
        </p>
        <p>
          <span className="font-semibold">Fecha de nacimiento:</span>{" "}
          {fnacimiento}
        </p>
        <p>
          <span className="font-semibold">Estado:</span> {status}
        </p>
      </div>
    </div>
  );
}

function MyTableEmpresa() {
  const data = dataPermiso.permisos;
  return (
    <div className=" bg-slate-50   w-full	 ">
      {data.map((e, index) => (
        <table key={index} className="w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th colSpan={7} className="p-2 text-left">
                {e.categoria}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key={index} className="border-b">
              <td colSpan={3} className=" py-2 px-4 text-left border w-40">
                <h3>{e.subcategoria}</h3>
              </td>
              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.inactivo ? true : false} />{" "}
              </td>

              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.ver ? true : false} />{" "}
              </td>
              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.administrar ? true : false} />{" "}
              </td>
              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.todo ? true : false} />{" "}
              </td>
              <td
                colSpan={0}
                className="py-2 px-4 text-center   text-sm border"
              >
                <input type="radio" checked={e.propietario ? true : false} />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

const Myperfil: React.FC = () => {
  // Assuming you have data for your employees:
  const employeeData: DatosProps = {
    name: "Juan Aguilera",
    email: "app@wecom.global",
    phone: "+1234567890",
    cargo: "Software Engineer",
    fnacimiento: "1990-01-01", // Adjust format if necessary
    status: "Active",
  };

  return (
    <div className="w-85 mx-auto    overflow-y-auto">
      <div className=" w-3/4 mx-auto">
        <MyDatos {...employeeData} />{" "}
        <Accordion className="m-4 font-bold">
          <AccordionItem
            className=" font-bold  bg-white rounded-3xl px-6"
            key="1"
            aria-label="Accordion 1"
            title={"Permisos"}
          >
            <table className="w-full mt-9  table-auto 	">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th colSpan={3} className="py-2 px-4 text-left">
                    Módulo
                  </th>
                  <th colSpan={3} className="py-2 px-4 text-center">
                    Permiso
                  </th>
                  <th colSpan={3} className="py-2 px-4 text-center">
                    Visualización
                  </th>
                </tr>
                <tr className="bg-white  ">
                  <th
                    colSpan={3}
                    className="py-2 px-4 text-left border w-40"
                  ></th>
                  <th
                    colSpan={0}
                    className="py-2 px-4 text-left text-sm	 border	"
                  >
                    Inactivo
                  </th>
                  <th
                    colSpan={0}
                    className="py-2 px-4 text-left  text-sm border"
                  >
                    Solo Ver
                  </th>
                  <th
                    colSpan={0}
                    className="py-2 px-4 text-left  text-sm border"
                  >
                    Administrar
                  </th>
                  <th
                    colSpan={0}
                    className="py-2 px-4 text-left  text-sm border"
                  >
                    Todo
                  </th>
                  <th
                    colSpan={0}
                    className="py-2 px-4 text-left  text-sm border"
                  >
                    Propietario
                  </th>
                </tr>
              </thead>
              {/* Si tienes filas de datos, deberían ir dentro de un <tbody> aquí */}
            </table>
            <MyTableEmpresa />
          </AccordionItem>
        </Accordion>
        <Accordion className="m-4 font-bold">
          <AccordionItem
            className=" font-bold  bg-white rounded-3xl px-6"
            key="1"
            aria-label="Accordion 1"
            title={"Restricción de descuentos"}
          >
          <h4>Máximo dscto productos s/inventario</h4>
          <h2>100%</h2>


          </AccordionItem>
        </Accordion>

        <Accordion className="m-4 font-bold">
          <AccordionItem
            className=" font-bold  bg-white rounded-3xl px-6"
            key="1"
            aria-label="Accordion 1"
            title={"Horario Usuario"}
          >
          <h4></h4>
          <h2>100%</h2>


          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Myperfil;
