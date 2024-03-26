import React, { Suspense } from "react";
import Nav from "../components/Navegation/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Ventas from "./nested/Administration/Ventas";

const Administration: React.FC = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        {location.pathname === "/administration" && <Ventas />}
      </Suspense>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Administration;
