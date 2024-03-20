import React from 'react';
import Nav from '../components/Navegation/Nav';
import Myperfil from './nested/MyPerfil';

const MiEmpresa: React.FC = () => {

    
  return (
<div className='h-screen w-full bg-green-200 flex flex-row '>
      {/* <h2>Administration</h2> */}
      <Nav />

      <Myperfil/>
</div>
  );
};

export default MiEmpresa;