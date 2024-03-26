import React from "react";
import Nav from "../components/Navegation/Nav";
<<<<<<< HEAD
import TableAdministration from "../components/Elements/Tables/TableAdministration";
import TableAdministration from "../components/Elements/Tables/TableAdministration";
=======
/* import TableAdministration from "../components/Elements/Tables/TableAdministration";
 */ import TablaClientePaginado from "../components/Elements/Tables/TablaClientePaginado";
>>>>>>> 65a10568c15215127650cee011d629d2952db315
/* import '../styles/App.scss' */

const Operations: React.FC = () => {
  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      {/* <h2>Administration</h2> */}
      <Nav />
<<<<<<< HEAD
      <TableAdministration searchValue={""} />
      {/* <TableAdministration searchValue={""} /> */}
=======
      <TablaClientePaginado />
>>>>>>> 65a10568c15215127650cee011d629d2952db315
    </div>
  );
};

export default Operations;
