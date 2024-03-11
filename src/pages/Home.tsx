import React from "react";
import Nav from "../components/Navegation/Nav";
import Aside from "../components/Aside/Aside";


const Home: React.FC = () => {
  return (
    <div className="h-screen w-full bg-green-200 flex flex-row ">
      <Nav />
      <Aside />
    </div>
  );
};

export default Home;
