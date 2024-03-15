import React, { useState } from 'react';
import Nav from '../components/Navegation/Nav';
import Testing from './Testing';
import SearchSelect from '../components/Elements/Herramientas/SearchSelect';
import DateSelect from '../components/Elements/Herramientas/DateSelect';
import Search from '../components/Elements/Herramientas/Search';
import Button from '../components/Elements/Button/Button';

const Administration: React.FC = () => {
  // State variables to store selected start and end dates
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Callback functions to update selected start and end dates
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  // Filtering logic to filter data based on selected start and end dates
  // You can replace this with your actual filtering logic
  const filteredData = []; // Implement your filtering logic here

  return (
    <div className='h-screen w-full bg-green-200 flex flex-row'>
      <Nav /> {/* Render Nav component on the left side */}
      <div className="flex flex-col w-full"> {/* Create a column layout for the remaining content */}
        <div className='h-screen w-full bg-green-200 flex flex-row'>
          {/* Render DateSelect component and pass callback functions */}
          <DateSelect 
            startDate={startDate} 
            endDate={endDate} 
            onStartDateChange={handleStartDateChange} 
            onEndDateChange={handleEndDateChange} 
          />
        </div>
        <div className='h-screen w-full bg-green-200 flex flex-row'>
          <Search />  
          <SearchSelect /> {/* Render SearchSelect component */}
          <Button name={'EMITIDAS'} /><Button name={'PENDIENTES'} /><Button name={'RECURRENTES'} />
        </div>
        {/* Pass filtered data to Testing component */}
        <Testing data={filteredData} />
      </div>
    </div>
  );
};

export default Administration;
