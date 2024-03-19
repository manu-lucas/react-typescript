import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import { useDateContext } from '../../Contexts/DateContext';



const DateSelect: React.FC = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateContext();

  const handleDateChange = (date: Date | null, isStart: boolean) => {
    if (isStart) {
      setStartDate(date || new Date());
    } else {
      setEndDate(date || new Date());
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <label className="mr-2">From:</label>
        <DatePicker
          className="border p-2 rounded-md"
          selected={startDate}
          onChange={(date) => handleDateChange(date, true)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Until:</label>
        <DatePicker
          className="border p-2 rounded-md"
          selected={endDate}
          onChange={(date) => handleDateChange(date, false)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default DateSelect;