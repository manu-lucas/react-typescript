import React from 'react';
import DateSelect from '../components/Elements/Herramientas/DateSelect';
import Nav from '../components/Navegation/Nav';
/* import '../styles/App.scss' */



const Calendar: React.FC = () => {

    
  return (
<div className='h-screen w-full bg-green-200 flex flex-row'>
      {/* <h2>Administration</h2> */}
      <Nav />
      <DateSelect />
      
      
            
</div>
  );
};

export default Calendar;
