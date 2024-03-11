import React from "react";
import Reference from "../Elements/Reference";
import { FaHome, FaCashRegister, FaFileSignature, FaCalendarAlt, FaLandmark } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5'; // Importación corregida aquí

const Nav: React.FC = () => {
  const referencesData = [
    { name: "Inicio", rel: <FaHome /> },
    { name: "Comercial", rel: <FaCashRegister /> },
    { name: "Operaciones", rel: <FaFileSignature /> },
    { name: "Calendario", rel: <FaCalendarAlt /> },
    { name: "Administracion", rel: <FaLandmark /> },
    { name: "Mi Empresa", rel: <IoBusiness /> },
  ];

  return (
    <div className="h-screen w-48 bg-green-50">
      <div className=" my-28">
        {referencesData.map((reference, index) => (
          <Reference key={index} title={reference.name} icons={reference.rel} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
