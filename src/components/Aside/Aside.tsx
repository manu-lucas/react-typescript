import React from "react";
// import "../../styles/home/home.scss";
import Card from "../Elements/Cards/Card";

const Aside: React.FC = () => {
  return (
    <div className=" pt-20 w-4/5 bg-orange-500  mx-auto">
      <div className="  bg-slate-500		 mx-auto block overflow-x-auto	w-72">
        <div className="flex flex-row ">
          <Card title="Cuentas" total={0} />
          <Card title="Rentabilidad" total={0} conciliado={0} />
          <Card title="Gastos" total={0} otros={0} />
          <Card title="Documentos de venta" total={0} />
        </div>
      </div>
    </div>
  );
};

export default Aside;
