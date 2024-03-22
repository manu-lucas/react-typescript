import React from "react";
import Nav from "../components/Navegation/Nav";
import { Outlet, useLocation } from "react-router-dom"; // Importa Outlet y useLocation
import Ventas from "./nested/Administration/Ventas";

const Administration: React.FC = () => {
  const location = useLocation(); // Usa el hook useLocation para acceder al objeto location

  console.log(location.pathname);
  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <Nav />
      {location.pathname === "/administration" && <Ventas />}

      <div className="flex-grow">
        {" "}
        {/* This div will take up the remaining space */}
        <Outlet />
      </div>
    </div>
  );
};

export default Administration;
