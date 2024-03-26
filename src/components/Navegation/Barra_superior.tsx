import React from "react";
import { Input } from "@nextui-org/react";


const NavSuperior: React.FC = () => {



    return (
        <div className="w-85 h-20 bg-grisBarra flex justify-around items-center">
            <div className="w-4/6 p-10 flex items-center justify-between">
                <div className="w-full">
                    <h4>Juan</h4>
                    <h5>Gestor de Ventas</h5>
                </div>

            </div>
            <div className="w-3/6 p-10 flex items-center justify-between">
                <img src="src\assets\img\foto_user.png" alt="" />
                <div className="w-full">
                    <h4>Juan</h4>
                    <h5>Gestor de Ventas</h5>
                </div>

            </div>
        </div>
    );


}

export default NavSuperior
