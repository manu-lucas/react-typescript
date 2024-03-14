import React from 'react';
import Nav from '../components/Navegation/Nav';
import Testing from './Testing';
/* import '../styles/App.scss' */



const Operations: React.FC = () => {

    
  return (
<div className='h-screen w-full bg-green-200 flex flex-row'>
      {/* <h2>Administration</h2> */}
      <Nav />
      <Testing />
      
            
</div>
  );
};

export default Operations;
