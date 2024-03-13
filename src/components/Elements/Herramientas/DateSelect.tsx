import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles




const DateSelect: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date("2023/02/08"));
  const [endDate, setEndDate] = useState(new Date("2023/02/10"));

 
  return (
  <div className="flex flex-row ">
    <div className="flex items-center">
      <label className="mr-2">From:</label>
      <DatePicker
        className="border p-2 rounded-md"
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
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
        onChange={(date) => setEndDate(date as Date)}
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
