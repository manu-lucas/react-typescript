import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import moment from "moment";
import "moment/locale/es"; // Importa la localización en español
import Button from "../Button/Button";
import SelectDate from "../Herramientas/SelectDate";
import SelectStyle from "../Herramientas/SelectNextUI";
import TextTareas from "../Inputs/TextTareas";
import Inputs from "../Inputs/Inputs";

interface ScheduleItem {
  horario: string;
  columna2: string;
}

moment.updateLocale("es", {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  weekdays: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
});

const formatDate = (date: Date) =>
  moment(date).format("dddd, D [de] MMMM, YYYY");

const scheduleItems: ScheduleItem[] = [
  { horario: "08:00 am", columna2: "" },
  { horario: "09:00 am", columna2: "" },
  { horario: "10:00 am", columna2: "" },
  { horario: "11:00 am", columna2: "" },
  { horario: "12:00 pm", columna2: "" },
  { horario: "1:00 pm", columna2: "" },
  { horario: "2:00 pm", columna2: "" },
  { horario: "3:00 pm", columna2: "" },
  { horario: "4:00 pm", columna2: "" },
  { horario: "5:00 pm", columna2: "" },
  { horario: "6:00 pm", columna2: "" },
];
/*    ------------------------------*/
const dataHora = [
  { label: "9:00 am", value: "9:00" },
  { label: "9:15 am", value: "9:15" },
  { label: "9:30 am", value: "9:30" },
  { label: "9:45 am", value: "9:45" },
  { label: "10:00 am", value: "10:00" },
  { label: "10:15 am", value: "10:15" },
  { label: "10:30 am", value: "10:30" },
  { label: "10:45 am", value: "10:45" },
  { label: "11:00 am", value: "11:00" },
  { label: "11:15 am", value: "11:15" },
  { label: "11:30 am", value: "11:30" },
  { label: "11:45 am", value: "11:45" },
  { label: "12:00 pm", value: "12:00" },
  { label: "12:15 pm", value: "12:15" },
  { label: "12:30 pm", value: "12:30" },
  { label: "12:45 pm", value: "12:45" },
  { label: "1:00 pm", value: "13:00" },
  { label: "1:15 pm", value: "13:15" },
  { label: "1:30 pm", value: "13:30" },
  { label: "1:45 pm", value: "13:45" },
  { label: "2:00 pm", value: "14:00" },
  { label: "2:15 pm", value: "14:15" },
  { label: "2:30 pm", value: "14:30" },
  { label: "2:45 pm", value: "14:45" },
  { label: "3:00 pm", value: "15:00" },
  { label: "3:15 pm", value: "15:15" },
  { label: "3:30 pm", value: "15:30" },
  { label: "3:45 pm", value: "15:45" },
  { label: "4:00 pm", value: "16:00" },
  { label: "4:15 pm", value: "16:15" },
  { label: "4:30 pm", value: "16:30" },
  { label: "4:45 pm", value: "16:45" },
  { label: "5:00 pm", value: "17:00" },
  { label: "5:15 pm", value: "17:15" },
  { label: "5:30 pm", value: "17:30" },
  { label: "5:45 pm", value: "17:45" },
  { label: "6:00 pm", value: "18:00" },
];

const dataCliente = [
  { label: "Erwin", value: "erwin" },
  { label: "Sebastian", value: "sebastian" },
  { label: "Agustin", value: "agustin" },
  { label: "Exequiel", value: "exequiel" },
];

const horas = [
  { label: "00", value: "00" },
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
];
const minutos = [
  { label: "00", value: "00" },
  { label: "15", value: "15" },
  { label: "30", value: "30" },
  { label: "45", value: "45" },
  { label: "60", value: "60" },
];
const proyecto = [
  { label: "Casa Maria", value: "00" },
  { label: "Los aposteles", value: "15" },
  { label: "MI parcela", value: "30" },
];
const cliente = [
  { label: "Agustin  Gomez", value: "00" },
  { label: "Cliente A", value: "15" },
  { label: "Cliente B", value: "30" },
];
interface PropsAgendamiento {
  changeState?: () => void; // Se sugiere que esta prop pueda ser opcional
}

const Agendamiento: React.FC<PropsAgendamiento>  = ({changeState}) => {
  const handleCloseOnClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Se asegura que el evento se dispare solo cuando se clickea fuera del contenido del modal
    if (e.target === e.currentTarget) {
      changeState?.(); // Llama a la función changeState si se proporciona
    }
  };


  return (
    <div className="w-full absolute h-screen right-0 top-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm" onClick={handleCloseOnClickOutside}>
      <div className="w-140 bg-white mx-auto mt-10 rounded-3xl p-4" onClick={(e) => e.stopPropagation()}>
        <h3>Agendamiento</h3>

        <div className="flex flex-row">
          <div>
            <h3>Fecha</h3>
            <SelectDate />
          </div>

          <div className="w-28">
            <SelectStyle title="Hora inicio" data={dataHora} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">
            <SelectStyle title="Usuario" data={dataCliente} />
          </div>

          <div className="flex flex-row  items-end">
            <div className="w-28 ">
              <SelectStyle title="Duración" data={horas} />
            </div>
            <div className="w-28 ">
              <SelectStyle data={minutos} />
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-36 ">
            <SelectStyle title="Proyecto" data={proyecto} />
          </div>
          <div className="w-36 ">
            <SelectStyle title="Cliente/Proveedor" data={cliente} />
          </div>
        </div>
        <div>
          <TextTareas title="Notas" />
        </div>

        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={<Button name="Agregar Dirección" />}
          >
            <div className="w-full flex flex-row">
              <Inputs title="Dirección" placeholder="Ej: Av.Suecia 243" />
              <Inputs title="Comuna" placeholder="Ej:Providencia" />
              <Inputs title="Ciudad" placeholder="Ej:Santiago" />
            </div>
          </AccordionItem>
        </Accordion>
        <Button name="Crear" />
        <Button name="Cerrar" changeState={changeState} />

      </div>
    </div>
  );
};

/*    ------------------------------*/

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [parentState, setParentState] = useState(false);

  const handleChange = () => {
    setParentState(!parentState);

  };

  const handleDecreaseDay = () => {
    setCurrentDate((prevDate) => moment(prevDate).subtract(1, "days").toDate());
  };

  const handleIncreaseDay = () => {
    setCurrentDate((prevDate) => moment(prevDate).add(1, "days").toDate());
  };

  // function onChange(){

  // }

  return (
    <div className="calendar">
      <Button name="Agregar "  changeState={handleChange}/>

      <div className="current-date">{formatDate(currentDate)}</div>

      <div className="button-container">
        <button onClick={handleDecreaseDay}>-</button>
        <button onClick={handleIncreaseDay}>+</button>
      </div>

      <div>
        <table className="border-2 border-solid w-140">
          <thead>
            <tr className="border-2 border-solid">
              <th>Horario</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {scheduleItems.map((item, index) => (
              <tr className="border-2 border-solid" key={index}>
                <td className="border-2 border-solid">{item.horario}</td>
                <td className="border-2 border-solid">{item.columna2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*---------------------------------------------------*/}
                {
                  parentState&&<Agendamiento  changeState={handleChange}/>

                }
    </div>
  );
};

export default MyCalendar;
