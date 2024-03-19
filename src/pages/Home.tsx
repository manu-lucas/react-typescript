import React from "react";
import Nav from "../components/Navegation/Nav";
import Aside from "../components/Aside/Aside";
import Nav2 from "../components/Navegation/Nav2";


const Home: React.FC = () => {
  return (
    <div className="h-screen w-100 bg-green-200 flex flex-row ">
      <Nav/>
      <Aside />
    </div>
  );
};

export default Home;
