import React from 'react';
import Nav from '../components/Navegation/Nav';
import Aside from '../components/Aside/Aside';

import {Card, CardHeader, CardBody, Image,Avatar} from "@nextui-org/react";



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
   



    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          width={270}
        />
      </CardBody>
    </Card>



      </div>
     


  );
};

export default Home;
