import React from "react";
import Nav from "../components/Navegation/Nav";
import TermsOfService from "../components/Elements/Terms";
/* import '../styles/App.scss' */

const TerminosyCondiciones: React.FC = () => {
  return (
    <div className="h-screen w-full bg-grisFondo flex flex-row">
      {/* <h2>Administration</h2> */}
      <Nav />
      <TermsOfService />
    </div>
  );
};

export default TerminosyCondiciones;
