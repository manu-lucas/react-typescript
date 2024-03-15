import React, { useState, ChangeEvent } from "react";
import "react-international-phone/style.css";
import Inputs from "../Inputs/Inputs";
// import SearchSelect from "../Herramientas/SearchSelect";
import SelectStyle from "../Herramientas/SelectNextUI";

const data = [
  { label: "Estafania", value: "default" },
  { label: "Veronica", value: "opcion1" },
  { label: "Juan Carlos", value: "opcion2" },
  { label: "Lucas", value: "opcion3" },
  { label: "Exequiel", value: "opcion4" },
  { label: "Martin", value: "opcion5" },
];



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
    <div className=" w-9/12	 m-5 bg-slate-400  rounded-lg pb-3
     ">
      <div className="w-full ">
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
          <div className="flex flex-row my-7 ">
            <Inputs
              title="Teléfono"
              type="text"
              placeholder=""
              name="telefono"
              value={inputValue.telefono}
              onChange={handleChange}
            />
            {/* <SearchSelect /> */}
            <SelectStyle  title="Vendedor-1" data={data} />
            <SelectStyle  title="Vendedor-2" data={data} />



          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClienteContacto;
