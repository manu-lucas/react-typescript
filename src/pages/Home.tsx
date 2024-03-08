import React from 'react';
import Nav from '../components/Navegation/Nav';
import Aside from '../components/Aside/Aside';

import {Avatar} from "@nextui-org/react";



const Home: React.FC = () => {

    
  return (
<div className="container mx-auto px-1 py-8 m-1">
<Nav/>
<Aside/>


      <h1 className="p-2 text-2xl  m-1" >This is my React app with Tailwind CSS!</h1>

      <div className="flex gap-3 items-center">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar name="Junior" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar name="Jane" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar name="Joe" />
    </div>
   
      </div>
     


  );
};

export default Home;
