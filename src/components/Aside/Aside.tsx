import React from "react";
import "../../styles/home/home.scss";
import Card from "../Elements/Card";

const Aside: React.FC = () => {
  return (
    <div className="containerAside">
      <div className="centerAside">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Aside;
