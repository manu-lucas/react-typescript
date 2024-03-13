import { useState } from 'react';
import Select from 'react-select';


// Define the type for the selected option
type SelectedOptionType = {
  value: string;
  label: string;
};

const periods: SelectedOptionType[] = [
  { value: 'ultimos 3 meses', label: 'Ultimos 3 meses' },
  { value: 'ultimos 6 meses', label: 'Ultimos 6 meses' },
  { value: 'ultimos 9 meses', label: 'Ultimos 9 meses' },
  { value: 'este año', label: 'Este año' },
  { value: 'año pasado', label: 'Año pasado' },
  { value: 'año antepasado', label: 'Año antepasado' }
];



const SelectPeriod = () => {
  
  const [selectedPeriod, setSelectedPeriod] = useState<SelectedOptionType>(periods[0]);


  // Function to handle period selection change
  const handlePeriodChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setSelectedPeriod(selectedOption as SelectedOptionType);
      // Call a function to filter information based on the selected period
      filterInformation(selectedOption.value); // You need to implement this function
    }
  };

  // Function to simulate filtering information (Replace with actual implementation)
  const filterInformation = (selectedPeriodValue: string) => {
    console.log(`Filtering information for period: ${selectedPeriodValue}`);
    // Here you can update state or perform any action based on the selected period
  };
  
  return (
    <div className="flex flex-col space-y-4">
      <Select
        className=" w-48 px-4 py-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        classNamePrefix="select"
        value={selectedPeriod}
        onChange={handlePeriodChange}
        options={periods}
  
      />

    </div>
  );
};

export default SelectPeriod; // Exporting SelectPeriod as default
