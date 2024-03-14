import React from "react";
import { Input } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full flex flex-col gap-2 max-w-[240px] relative">
      <Input
        variant="bordered"
        placeholder="Buscar"
        value={value}
        onValueChange={setValue}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <IoIosSearch />
      </div>

    </div>
  );
}
