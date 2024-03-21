import React from 'react';
import Nav from '../components/Navegation/Nav';
import Myperfil from './nested/MyPerfil';
import { Outlet, useLocation } from 'react-router-dom'; // Importa Outlet y useLocation

const MiEmpresa: React.FC = () => {
  const location = useLocation(); // Usa el hook useLocation para acceder al objeto location

    
  return (
<div className='h-screen w-full  bg-green-200 flex flex-row '>
      {/* <h2>Administration</h2> */}
      <Nav />
      {
        (location.pathname==="/miempresa")&&<Myperfil/>
      }
      
      <Outlet  /> 

</div>
  );
};

export default MiEmpresa;