import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import { es } from 'date-fns/locale'; // Importar el idioma español

const SelectDate: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)

  return (
    <div className="flex flex-row ">
      <div className="flex items-center">
        <DatePicker
          className="border p-2 rounded-md"
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          selectsStart
          startDate={startDate}
          locale={es} // Utilizar el idioma español
        />
      </div>
    </div>
  );
};

export default SelectDate;
