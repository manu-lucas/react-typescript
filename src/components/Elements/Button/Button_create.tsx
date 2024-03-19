import { useState } from "react";

interface Props {
  name: string;
  changeState?: () => void; // Utilizamos onclick en lugar de onClick
  stateProp?: string
}

const ButtonCreate: React.FC<Props> = ({ name }) => { 

const [stateCondicional, setstateCondicional] = useState(false)

  return (
    <div className={ ` float-start ml-5 border rounded-2xl inline-block px-2 text-white p-2
    ${stateCondicional&&"bg-verdeFondo"   }  ${!stateCondicional&&"bg-verdePie"   }
    cursor-pointer`} onClick={()=>setstateCondicional(!stateCondicional)}>
      <h3>{name}</h3>
    </div>
  );
};

export default ButtonCreate;
