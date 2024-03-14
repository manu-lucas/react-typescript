import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCashRegister, FaFileSignature, FaCalendarAlt, FaLandmark, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';
import Reference from "../Elements/Reference"; // Import your Reference component

interface Subcategory {
  name: string;
  path: string;
}

interface Reference {
  name: string;
  rel: JSX.Element;
  path: string;
  subcategories?: Subcategory[];
}

const Nav: React.FC = () => {
  const referencesData: Reference[] = [
    {
      name: "Inicio",
      rel: <FaHome />,
      path: "/home"
    },
    {
      name: "Comercial",
      rel: <FaCashRegister />,
      path: "/comercial",
      subcategories: [
        {
          name: "Clientes",
          path: "/comercial/cliente"
        },
        {
          name: "Ecommerce",
          path: "/comercial/ecommerce"
        },
        {
          name: "Consultas",
          path: "/comercial/consulta"
        },
        {
          name: "Proyectos",
          path: "/comercial"
        }
      ]
    },
    {
      name: "Operaciones",
      rel: <FaFileSignature />,
      path: "/operations"
    },
    {
      name: "Calendario",
      rel: <FaCalendarAlt />,
      path: "/calendar"
    },
    {
      name: "Administracion",
      rel: <FaLandmark />,
      path: "/administration"
    },
    {
      name: "Mi Empresa",
      rel: <IoBusiness />,
      path: "/mi-empresa"
    },
    {
      name: "Repositorio Componentes",
      rel: <IoBusiness />,
      path: "/componentes"
    }
  ];

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (path: string) => {
    // Toggle the expanded state of the category
       setExpandedCategory(expandedCategory === path ? null : path);

  };
  
  const renderNavItems = (references: Reference[]) => {
  return references.map((reference, index) => (
    <li key={index}>
      <Link to={reference.path}>
        <div className="category" onClick={() => handleCategoryClick(reference.path)}>
          <Reference title={reference.name} icons={reference.rel} /> {/* Use your Reference component here */}
          {reference.subcategories && (
            <span className="toggle-icon">
              {expandedCategory === reference.path ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          )}
        </div>
      </Link>
      {(expandedCategory === reference.path || !reference.subcategories) && (
        <ul className="submenu">
          {reference.subcategories?.map((subcategory, subIndex) => (
            <li key={subIndex}>
              <Link to={subcategory.path}>{subcategory.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
};

  return (
    <nav>
      <ul>
        {renderNavItems(referencesData)}
      </ul>
    </nav>
  );
};

export default Nav;
