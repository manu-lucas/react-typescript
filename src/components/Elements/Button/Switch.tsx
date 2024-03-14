import React from "react";
import { Switch } from "@nextui-org/react";

const SwitchComponent: React.FC = () => {
    const [isSelected, setIsSelected] = React.useState(true);

  return (
   <div> 
    <Switch defaultSelected color="success" isSelected={isSelected} onValueChange={setIsSelected}></Switch>
    </div>
  );
}

export default SwitchComponent;



