import React, { useState, ChangeEvent } from "react";
import { Card, CardHeader } from "@nextui-org/react";
import "react-international-phone/style.css";
import Inputs from "../Inputs/Inputs";

const CardClienteContacto: React.FC = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    celular: "",
    direccion: "",
    comuna: "",
    ciudad: "",
    notas: "",
    cPago: "",
    lcredito: "",
    lprecios: "",
    piepagina: "",
    telefono: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className=" w-9/12	 m-5 bg-slate-400 ">
      <CardHeader className="w-full ">
        <div className=" w-full ">
          <h1 className="text-lg font-bold p-4">Contacto</h1>

          <h1 className="text-lg font-bold p-4"></h1>
          <div className="flex flex-row">
            <Inputs
              title="Nombre"
              type="text"
              placeholder="Ej: Emanuel Kuzlis"
              name="name"
              value={inputValue.name}
              onChange={handleChange}
            />

            <Inputs
              title="Email"
              type="text"
              placeholder="Ej: emanuel_kuzlis@example.com"
              name="rut"
              value={inputValue.email}
              onChange={handleChange}
            />

            <Inputs
              title="Celular"
              type="text"
              placeholder=""
              name="celular"
              value={inputValue.celular}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row my-7">
            <Inputs
              title="Teléfono"
              type="text"
              placeholder=""
              name="telefono"
              value={inputValue.telefono}
              onChange={handleChange}
            />

          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardClienteContacto;
