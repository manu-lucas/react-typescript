import React from "react";
import { Input } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";

interface SearchProps {
  onSearchChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchChange }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onSearchChange(newValue);
  };

  return (
    <div className="w-full flex flex-col gap-2 max-w-[240px] relative">
      <Input
        variant="bordered"
        placeholder="Buscar"
        value={value}
        onValueChange={handleChange}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <IoIosSearch />
      </div>
    </div>
  );
};

export default Search;
