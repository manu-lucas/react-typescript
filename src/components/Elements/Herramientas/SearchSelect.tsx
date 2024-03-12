
import  { useState } from 'react';
import { Pagination } from '@nextui-org/react'
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
        className="basic-single select w-48 absolute z-50"
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
    <Pagination showControls total={10} initialPage={1} />  
    </div>

  );
};

export default SearchSelect; // Exporting SearchSelect as default
