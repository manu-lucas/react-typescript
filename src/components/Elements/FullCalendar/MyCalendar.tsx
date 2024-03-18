import  { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es'; // Importa la localización en español
import Button from '../Button/Button';




interface ScheduleItem {
  horario: string;
  columna2: string;
}


moment.updateLocale('es', {
  months : [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ],
  weekdays : [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
]
});

const formatDate = (date: Date) => moment(date).format('dddd, D [de] MMMM, YYYY');

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



const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDecreaseDay = () => {
    setCurrentDate(prevDate => moment(prevDate).subtract(1, 'days').toDate());
  };

  const handleIncreaseDay = () => {
    setCurrentDate(prevDate => moment(prevDate).add(1, 'days').toDate());
  };

  return (
    <div className="calendar">

      <Button  name="Agregar "/>
      <div className="current-date">{formatDate(currentDate)}</div>




      <div className="button-container">
        <button onClick={handleDecreaseDay}>-</button>
        <button onClick={handleIncreaseDay}>+</button>
      </div>


<div>

<table className='border-2 border-solid w-140'>
      <thead >
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


<div>


</div>

          <h3>Agendamiento</h3>



    </div>
  );
};

export default MyCalendar;
