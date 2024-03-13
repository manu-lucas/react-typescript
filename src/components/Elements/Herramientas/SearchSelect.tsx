import  { useState } from 'react';
import Select from 'react-select';
import { clientOptions } from './data';



const SearchSelect = () => {
  const [isClearable, setIsClearable] = useState(true);
  
  return (
    <div className="flex mx-8  ">
      <Select
        className="  w-72   "
        classNamePrefix="select"
        defaultValue={clientOptions[0]}
        isClearable={isClearable}
        name="color"
        options={clientOptions}
  
      />
{/* 
      <div className="text-gray-500 text-sm italic mt-4">
      
      </div> */}
    </div>

  );
};

export default SearchSelect; // Exporting SearchSelect as default
