import React from "react";
import Nav from "../components/Navegation/Nav";
import Contrasena from "../components/Elements/Contrasena";
/* import '../styles/App.scss' */

const CreaContrasena: React.FC = () => {
  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      {/* <h2>Administration</h2> */}
      <Nav />
      <Contrasena />
    </div>
  );
};

export default CreaContrasena;
