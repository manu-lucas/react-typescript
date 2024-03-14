import React, { useState } from "react";
import { FaHome, FaCashRegister, FaFileSignature, FaCalendarAlt, FaLandmark, FaAngleDown } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';

interface Reference {
  name: string;
  rel: JSX.Element;
  path: string;
  subcategories?: Reference[];
}

const Nav: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
          rel: <FaAngleDown />,
          path: "/comercial/cliente"
        },
         {
          name: "Ecommerce",
          rel: <FaAngleDown />,
          path: "/comercial/Ecommerce"
        },
         {
          name: "Consultas",
          rel: <FaAngleDown />,
          path: "/comercial/Consulta"
        },
        {
          name: "Proyectos",
          rel: <FaAngleDown />,
          path: "/comercial"
        },
        // Add more subcategories if needed
      ]
    },
    {
      name: "Operaciones",
      rel: <FaFileSignature />,
      path: "/Operations"
    },
    {
      name: "Calendario",
      rel: <FaCalendarAlt />,
      path: "/calendario"
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
    }
  ];

  const handleNavigation = (path: string) => {
    // Navigate to the specified path
    window.location.href = path;
  };

  const handleCategoryClick = (path: string) => {
    // Toggle the expanded state of the category
    if (expandedCategory === path) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(path);
    }
  };

  return (
    <div className=" h-screen w-60 rounded-br-[200px] bg-gradient-to-b from-verdeFondo from-50% to-verdePie to-90% left-0">
      <div><img src="..\src\assets\logo_appify.jpeg"/></div>
      <div>
        {referencesData.map((reference, index) => (
          <div key={index}>
            <div className="reference" onClick={() => {
              if (reference.subcategories) {
                handleCategoryClick(reference.path);
              } else {
                handleNavigation(reference.path);
              }
            }}>
              <span className="icon">{reference.rel}</span>
              <span className="title">{reference.name}</span>
            </div>
            {reference.subcategories && expandedCategory === reference.path && (
              <div>
                {reference.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="reference" onClick={() => handleNavigation(subcategory.path)}>
                    <span className="icon">{subcategory.rel}</span>
                    <span className="title">{subcategory.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
