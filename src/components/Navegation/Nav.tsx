import React from "react";
import Reference from "../Elements/Reference";
import homeIcons from "../../assets/icons/home.svg";
import '../../styles/elements/nav.scss'

const Nav: React.FC = () => {
  const referencesData = [
    { name: "Inicio", rel: homeIcons },
    { name: "Comercial", rel: homeIcons },
    { name: "Operaciones", rel: homeIcons },
    { name: "Calendario", rel: homeIcons },
    { name: "Administracion", rel: homeIcons },
    { name: "Mi Empresa", rel: homeIcons },
  ];

  return (
    <>
    <div className="containerNav">     
      {referencesData.map((reference, index) => (
        <Reference key={index} title={reference.name} icons={reference.rel} />
      ))}{" "}
  </div>
    </>
  );
};
export default Nav;
