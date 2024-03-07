import React from 'react';
import '../styles/home/home.scss'
import Nav from '../components/Navegation/Nav';
import Aside from '../components/Aside/Aside';



const Home: React.FC = () => {

    
  return (
<div className='containerHome'>
<Nav/>
<Aside/>
</div>
     


  );
};

export default Home;
