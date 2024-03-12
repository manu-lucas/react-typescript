import React from "react";
import { FaHome, FaCashRegister, FaFileSignature, FaCalendarAlt, FaLandmark } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';

const Nav: React.FC = () => {
  const referencesData = [
    { name: "Inicio", rel: <FaHome />, path: "/" },
    { name: "Comercial", rel: <FaCashRegister />, path: "/comercial" },
    { name: "Operaciones", rel: <FaFileSignature />, path: "/operaciones" },
    { name: "Calendario", rel: <FaCalendarAlt />, path: "/calendario" },
    { name: "Administracion", rel: <FaLandmark />, path: "/administracion" },
    { name: "Mi Empresa", rel: <IoBusiness />, path: "/mi-empresa" },
  ];

  const handleNavigation = (path: string) => {
    // Navigate to the specified path
    window.location.href = path;
  };

  return (
    <div className="h-screen w-60 rounded-br-[200px] bg-gradient-to-b from-verdeFondo from-50% to-verdePie to-90%">
      
      <div><img src="..\src\assets\logo_appify.jpeg"/></div>

      
      
      <div>
        {referencesData.map((reference, index) => (
          <div key={index} className="reference" onClick={() => handleNavigation(reference.path)}>
            <span className="icon">{reference.rel}</span>
            <span className="title">{reference.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
