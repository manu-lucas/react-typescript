import React, { useState } from 'react';
import Select from 'react-select';
import { clientOptions } from './data';

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
   <label className="mr-4">
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const SearchSelect = () => {
  const [isClearable, setIsClearable] = useState(true);
  
  return (
    <div className="flex flex-col space-y-4">
      <Select
        className="basic-single select w-48"
        classNamePrefix="select"
        defaultValue={clientOptions[0]}
        isClearable={isClearable}
        name="color"
        options={clientOptions}
  
      />

      <div className="text-gray-500 text-sm italic mt-4">
        <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Clearable
        </Checkbox>
      </div>
    </div>
  );
};

export default SearchSelect; // Exporting SearchSelect as default
