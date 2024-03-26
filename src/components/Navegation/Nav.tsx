import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCashRegister,
  FaFileSignature,
  FaCalendarAlt,
  FaLandmark,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import Reference from "../Elements/Reference"; // Import your Reference component

interface Subcategory {
  name: string;
  path: string;
}

interface ReferencesProps {
  name: string;
  rel: JSX.Element;
  path: string;
  subcategories?: Subcategory[];
}

const Nav: React.FC = () => {
  const referencesData: ReferencesProps[] = [
    {
      name: "Inicio",
      rel: <FaHome />,
      path: "/home",
    },
    {
      name: "Comercial",
      rel: <FaCashRegister />,
      path: "/comercial",
      subcategories: [
        {
          name: "Clientes",
          path: "/comercial/cliente",
        },
        {
          name: "Ecommerce",
          path: "/comercial/ecommerce",
        },
        {
          name: "Consultas",
          path: "/comercial/consulta",
        },
        {
          name: "Proyectos",
          path: "/comercial",
        },
      ],
    },
    {
      name: "Operaciones",
      rel: <FaFileSignature />,
      path: "/operations",
    },
    {
      name: "Calendario",
      rel: <FaCalendarAlt />,
      path: "/calendar",
    },
    {
      name: "Administracion",
      rel: <FaLandmark />,
      path: "/administration",
      subcategories: [
        {
          name: "Ventas",
          path: "/administration",
        },
        {
          name: "Compras",
          path: "/administration/compras",
        },
        {
          name: "Pagos",
          path: "/administration/pagos",
        },
        {
          name: "Cobros",
          path: "/administration/cobros",
        },
        {
          name: "Cuentas",
          path: "/administration/cuentas",
        },
      ],
    },
    {
      name: "Mi Empresa",
      rel: <IoBusiness />,
      path: "/miempresa",
    },
    /* {
      name: "Componentes",
      rel: <FaAdjust/>,
      path: "/componentes"

    } */
  ];

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (path: string) => {
    setExpandedCategory(expandedCategory === path ? null : path);
  };

  const renderSubcategories = (subcategories?: Subcategory[]) => {
    if (!subcategories) return null;
    return (
      <ul className="submenu">
        {subcategories.map((subcategory, index) => (
          <li key={index}>
            <Link to={subcategory.path}>{subcategory.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderReference = (reference: ReferencesProps) => {
    return (
      <Link to={reference.path}>
        <div
          className="category flex items-center justify-between p-2 cursor-pointer"
          onClick={() => handleCategoryClick(reference.path)}
        >
          <Reference title={reference.name} icons={reference.rel} />
          {reference.subcategories && (
            <span className="toggle-icon">
              {expandedCategory === reference.path ? (
                <FaAngleUp />
              ) : (
                <FaAngleDown />
              )}
            </span>
          )}
        </div>
      </Link>
    );
  };

  const renderNavItems = (references: ReferencesProps[]) => {
    return references.map((reference, index) => (
      <li key={index}>
        {renderReference(reference)}
        {expandedCategory === reference.path &&
          renderSubcategories(reference.subcategories)}
      </li>
    ));
  };

  return (
    <div className="bg-verdePie h-screen w-15 rounded-br-[200px] pt-12">
      <div className="flex justify-center">
        <img className="w-4/5" src="..\src\assets\logo_blanco_sin_fondo.png" />
      </div>

      <nav className="pt-24">
        <ul>{renderNavItems(referencesData)}</ul>
      </nav>
    </div>
  );
};

export default Nav;
