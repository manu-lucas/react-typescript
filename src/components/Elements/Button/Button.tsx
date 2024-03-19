import { useState } from "react";

interface Props {
  name: string;
  changeState?: () => void; // Utilizamos onclick en lugar de onClick
  stateProp?: string
}

const Button: React.FC<Props> = ({ name }) => { 

const [stateCondicional, setstateCondicional] = useState(false)



  return (
    <div className={ `border rounded-2xl inline-block px-2 text-white m-50
    ${stateCondicional&&"bg-blue-500"   }  ${!stateCondicional&&"bg-slate-500"   }
    cursor-pointer`} onClick={()=>setstateCondicional(!stateCondicional)}>
      <h3>{name}</h3>
    </div>
    
  );
};

export default Button;
