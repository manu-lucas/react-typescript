import React from "react";
// import { useStore } from "../../../store/useStore";
// import { Link } from "react-router-dom";
import Button from "../../../components/Elements/Button/Button";
import Search from "../../../components/Elements/Herramientas/Search";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner} from "@nextui-org/react";

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
    <div className="h-screen w-85 bg-green-200">
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

       <Table
        aria-label="Tabla de usuarios"
        classNames={{
          table: "min-h-[400px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name">Nombre</TableColumn>
          <TableColumn key="cargo">Cargo</TableColumn>
          <TableColumn key="email">Email</TableColumn>
          <TableColumn key="status">Estado</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          loadingContent={<Spinner label="Cargando..." />}
        >
          {data.map((usuario, index) => (
            <TableRow key={index}>
              <TableCell>{usuario.name}</TableCell>
              <TableCell>{usuario.cargo}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.status === 1 ? "Activado" : "Desactivado"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    



    </div>
  );
};

export default Usuarios;
