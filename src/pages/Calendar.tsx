import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction'; // Descomenta si necesitas interacción
import { EventContentArg } from '@fullcalendar/common'; // Importación para tipar correctamente renderEventContent
import Nav from '../components/Navegation/Nav';
import esLocale from '@fullcalendar/core/locales/es'; // Importa el locale español


// Función para renderizar contenido personalizado de eventos con tipado correcto
function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b >aaa:{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const Calendar: React.FC = () => {
  // Si necesitas manejar el clic en fecha, asegúrate de tener un manejador aquí

  return (
    <div className='h-screen w-full bg-white flex flex-row'>
      <Nav />
      <div className='w-4/5 h-auto mx-auto'>
        <FullCalendar
          plugins={[dayGridPlugin /*, interactionPlugin*/]} // Añade interactionPlugin si lo necesitas
          eventContent={renderEventContent} // Usa tu función personalizada para renderizar contenido de eventos
          // Configuraciones adicionales según necesites
          events={[
            { title: 'Agenda del dia luuuucassss', date: '2024-03-25' },
            { title: 'event 2', date: '2019-04-02' }
          ]}
          locale={esLocale} // Configura el calendario para usar el idioma español

        />
      </div>
    </div>
  );
};

export default Calendar;
