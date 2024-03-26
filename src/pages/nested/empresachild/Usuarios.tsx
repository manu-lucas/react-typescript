import React from "react";
// import { useStore } from "../../../store/useStore";
// import { Link } from "react-router-dom";
import Button from "../../../components/Elements/Button/Button";
import Search from "../../../components/Elements/Herramientas/Search";

// import {useAsyncList} from "@react-stately/data";
import { getResUsuarios } from "../../../api/Request";



const Usuarios: React.FC = () => {
  // const { bears, increase} = useStore((state) => ({
  //   bears: state.bears,
  //   increase: state.increase,
  // }));

  const {data,isError,isLoading,error}=  getResUsuarios()

console.log(data)
 
  return (
    <div className="h-screen w-85 bg-grisFondo">
        <div> 

      <div className=" mx-auto flex flex-row  w-3/4  justify-between "> 
      <h2 >Usuarios</h2>
      <h2>Productos/Servicios</h2>
      <h2>Lista de Precios</h2>
      <h2>Proveedores</h2>
      <h2>Configuraciones</h2>
      </div>
    
      <div className=" w-full  text-right pr-7"> 
      <Button  name="REPORTE"/>
        <Button  name="+ AGREGAR"/>
      </div>

      <div className="flex flex-row justify-between px-8 mt-5"> 
      <div className=""> 
      <Button  name="ACTIVADO"/>
      <Button  name="DESACTIVADO"/>
      </div>

      <Search/>
      </div>
       

      </div>

    
    </div>
  );
};

export default Usuarios;
