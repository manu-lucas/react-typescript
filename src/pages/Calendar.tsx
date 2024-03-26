import React from 'react';
// import DateSelect from '../components/Elements/Herramientas/DateSelect';
import Nav from '../components/Navegation/Nav';
import MyCalendar from "../components/Elements/FullCalendar/MyCalendar"





 const Calendar: React.FC = () => {

    
  return (
<div className='h-screen w-full bg-white flex flex-row'>
      {/* <h2>Administration</h2> */}
      <Nav />
        <div className='  w-4/5 h-auto mx-auto'> 
        <MyCalendar  />
      </div>
      
            
</div>
  );
};

export default Calendar;
