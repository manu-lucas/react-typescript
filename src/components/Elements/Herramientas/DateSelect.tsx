import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";

export interface DateState {
  dateStart: Date;
  dateEnd: Date;
}

interface PropsDate {
  onchange?: (dates: DateState) => void;
}

const DateSelect: React.FC<PropsDate> = ({ onchange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Llama a changeState solo después de que se actualice startDate o endDate
  useEffect(() => {
    if (onchange) {
      onchange({
        dateStart: startDate,
        dateEnd: endDate,
      });
    }
  }, [startDate, endDate, onchange]); // Dependencias: cambio en startDate o endDate

  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <label className="mr-2">Desde:</label>
        <DatePicker
          className="border p-2 rounded-md"
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
        />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Hasta:</label>
        <DatePicker
          className="border p-2 rounded-md"
          selected={endDate}
          onChange={(date) => date && setEndDate(date)}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default DateSelect;
