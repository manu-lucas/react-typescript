import React from "react";
import Nav from "../components/Navegation/Nav";
import TableAdministration from "../components/Elements/Tables/TableAdministration";
/* import '../styles/App.scss' */

const Operations: React.FC = () => {
  return (
    <div className="h-screen w-full bg-green-200 flex flex-row">
      {/* <h2>Administration</h2> */}
      <Nav />
      <TableAdministration searchValue={""} />
    </div>
  );
};

export default Operations;
