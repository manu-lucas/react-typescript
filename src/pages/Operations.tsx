import React from "react";
import Nav from "../components/Navegation/Nav";
import TableAdministration from "../components/Elements/Tables/TableAdministration";
import TablaClientePaginado from "../components/Elements/Tables/TablaClientePaginado";
import TablaClientePaginado from "../components/Elements/Tables/TablaClientePaginado";
/* import '../styles/App.scss' */
import NavSuperior from "../components/Navegation/Barra_superior";

const Operations: React.FC = () => {
  return (
    <div className="h-screen w-full bg-grisFondo flex flex-row">
      {/* <h2>Administration</h2> */}
      <Nav />
      <TablaClientePaginado />
    </div>
  );
};

export default Operations;
