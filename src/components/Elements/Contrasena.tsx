import ButtonCreate from "./Button/Button_create";
import React, { useState, ChangeEvent } from "react";
import Inputs from "./Inputs/Inputs";

const Contrasena: React.FC = () => {
    const [inputValue, setInputValue] = useState({
        password: "",
        password2: "",

    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="h-screen w-85">
            <div className=" w-4/5 mx-auto mb-2 mt-6 rounded-3xl p-6 bg-white shadow-7xl h-4/5">

                <div className=" m-auto w-3/6 mt-5">
                    <h2>Cambiar Contraseña</h2>
                </div>

                <div className="flex flex-row justify-between">
                    <Inputs
                        title="Contraseña"
                        type="password"
                        placeholder=""
                        name="password"
                        value={inputValue.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <ul>
                        <li>La contraseña debe contener:</li>
                        <li>Mínimo 6 caracteres</li>
                        <li>Números y Letras</li>
                        <li>Al menos una mayúscula</li>
                        <li> Al menos un caracter especial</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-between">
                    <Inputs
                        title="Confirmar Contraseña"
                        type="password"
                        placeholder=""
                        name="password2"
                        value={inputValue.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full m-auto mt-5 flex ">
                    <ButtonCreate name="ACEPTAR" />
                </div>


            </div>

        </div>

    );
};

export default Contrasena;