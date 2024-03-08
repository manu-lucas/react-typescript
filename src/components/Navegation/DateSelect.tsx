import React, { useState } from "react";
import DatePicker from "react-datepicker";


const DateSelect: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    < >
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date as Date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
</>
  );
};
export default DateSelect;
