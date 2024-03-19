import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaHome, FaCashRegister, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoBusiness } from 'react-icons/io5';
import Reference from '../Elements/Reference'; // Ajusta la ruta según sea necesario

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

const MenuItemComponent: React.FC<{ reference: ReferencesProps; isActive: boolean; onClick: () => void }> = ({
  reference,
  isActive,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={handleItemClick}>
      <div className="menu-item-content">
        <Reference title={reference.name} icons={reference.rel} />
        {reference.subcategories && (
          <span className="toggle-icon">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        )}
      </div>
      {isOpen && reference.subcategories && (
        <ul className="submenu">
          {reference.subcategories.map((subcategory, index) => (
            <li key={index}>
              <Link to={subcategory.path}>{subcategory.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const VerticalMenu: React.FC<{ items: ReferencesProps[] }> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (path: string) => {
    setActiveItem(activeItem === path ? null : path);
  };

  return (
    <div className="menu-wrapper">
      {items.map((item, index) => (
        <div key={index} className={`menu-item-container ${activeItem === item.path ? 'active' : ''}`}>
          <MenuItemComponent
            reference={item}
            isActive={activeItem === item.path}
            onClick={() => handleItemClick(item.path)}
          />
        </div>
      ))}
    </div>
  );
};

const Nav2: React.FC = () => {
  const referencesData: ReferencesProps[] = [
    {
      name: 'Inicio',
      rel: <FaHome />,
      path: '/home',
    },
    {
      name: 'Comercial',
      rel: <FaCashRegister />,
      path: '',
      subcategories: [
        { name: 'Proyectos', path: '/comercial/proyectos' },
        { name: 'Consultas', path: '/comercial/consulta' },
        { name: 'E-Commerce', path: '/comercial/ecommerce' },
        { name: 'Clientes', path: '/comercial/cliente' },
        { name: 'Satisfacción', path: '/comercial/satisfaccion' },
      ],
    },
    {
      name: 'Operaciones',
      rel: <FaCashRegister />,
      path: '',
      subcategories: [
        { name: 'Orden de Trabajo', path: '/operaciones/orden-trabajo' },
        { name: 'Tablero', path: '/operaciones/tablero' },
        { name: 'Orden de compra', path: '/operaciones/orden-compra' },
      ],
    },
    {
      name: 'Calendario',
      rel: <FaCalendarAlt />,
      path: '/calendario',
      subcategories: [{ name: 'Agendamiento', path: '/calendario/agendamiento' }],
    },
    {
      name: 'Administración',
      rel: <FaCashRegister />,
      path: '',
      subcategories: [
        { name: 'Ventas', path: '/administracion/ventas' },
        { name: 'Compras', path: '/administracion/compras' },
        { name: 'Pagos', path: '/administracion/pagos' },
        { name: 'Cobros', path: '/administracion/cobros' },
        { name: 'Cuentas', path: '/administracion/cuentas' },
      ],
    },
    {
      name: 'Mi empresa',
      rel: <IoBusiness />,
      path: '/mi-empresa',
      subcategories: [
        { name: 'Mi perfil', path: '/mi-empresa/mi-perfil' },
        { name: 'Usuarios', path: '/mi-empresa/usuarios' },
        { name: 'Productos / Servicios', path: '/mi-empresa/productos-servicios' },
        { name: 'Listas de precios', path: '/mi-empresa/listas-precios' },
        { name: 'Proveedores', path: '/mi-empresa/proveedores' },
        { name: 'Configuraciones', path: '/mi-empresa/configuraciones' },
      ],
    },
  ];

  return <VerticalMenu items={referencesData} />;
};

export default Nav2;
