import  { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es'; // Importa la localización en español

// Establece la localización en español. No es necesario definir manualmente
// los meses y días ya que moment.js ya incluye estas traducciones.
moment.updateLocale('es', {
  months : [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ],
  weekdays : [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
]
});

const formatDate = (date: Date) => moment(date).format('dddd, D [de] MMMM, YYYY');

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
      <div className="current-date">{formatDate(currentDate)}</div>
      <div className="button-container">
        <button onClick={handleDecreaseDay}>-</button>
        <button onClick={handleIncreaseDay}>+</button>
      </div>
    </div>
  );
};

export default MyCalendar;
