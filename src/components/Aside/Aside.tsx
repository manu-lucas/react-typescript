import React from "react";
// import "../../styles/home/home.scss";
// import Card from "../Elements/Cards/Card";
import ScrollCard from "../Elements/Scroll/ScrollCard";
import Card from "../Elements/Cards/Card";

const Aside: React.FC = () => {
  return (
    <div className=" pt-20 w-85   mx-auto">
      <div className="  		 block overflow-x-auto	 w-auto">
      <ScrollCard/>
      <div className="flex flex-row w-full justify-around mt-6">

      <Card  title="Ventas" titleSecondary="Facturado" />


      <Card  title="Flujo de caja" id={1} /> 



      </div>
    
      </div>
    </div>
  );
};

export default Aside;
