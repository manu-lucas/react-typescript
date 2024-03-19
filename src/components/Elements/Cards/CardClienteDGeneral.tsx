import React, { useState, ChangeEvent } from "react";
import { Card, CardHeader, Accordion, AccordionItem  } from "@nextui-org/react";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
import Inputs from "../Inputs/Inputs";
import TextTareas from "../Inputs/TextTareas";



const CardClienteDGeneral: React.FC = () => {
  const [inputValue, setInputValue] = useState({
    razon: "",
    rut: "",
    giro: "",
    direccion: "",
    comuna: "",
    ciudad: "",
    notas: "",
    cPago: "",
    lcredito: "",
    lprecios: "",
    piepagina: "",
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
          <h1 className="text-lg font-bold p-4">Datos Generales</h1>
          <div className="flex flex-row">
            <Inputs
              title="Razon social o nombre"
              type="text"
              placeholder="Ej:Colmena G.C"
              name="razon"
              value={inputValue.razon}
              onChange={handleChange}
            />

            <Inputs
              title="Rut"
              type="text"
              placeholder="Ej: 4839164"
              name="rut"
              value={inputValue.rut}
              onChange={handleChange}
            />
            <Inputs
              title="Giro"
              type="text"
              placeholder=""
              name="giro"
              value={inputValue.giro}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row my-7">
            <Inputs
              title="Dirección"
              type="text"
              placeholder="Ej:Av.Suecia 243"
              name="direccion"
              value={inputValue.direccion}
              onChange={handleChange}
            />

            <Inputs
              title="Comuna"
              type="text"
              placeholder="Ej:Provindencia"
              name="comuna"
              value={inputValue.comuna}
              onChange={handleChange}
            />
            <Inputs
              title="Ciudad"
              type="text"
              placeholder="Ej.Santiago"
              name="ciudad"
              value={inputValue.ciudad}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardHeader>

      <Accordion className="m-4 font-bold">
        <AccordionItem
        className=" font-bold"
          key="1"
          aria-label="Accordion 1"
        
          title={
        <h2 className="border w-48 rounded-full	 bg-slate-50 absolute right-5 text-xs	 ">
         Campos Avanzados  
        </h2>
        
      }>
          <div>
            <div className="flex flex-row">
              <Inputs
                title="C.de pago"
                type="text"
                placeholder="-"
                name="cPago" // Asegúrate de que Inputs acepte y pase este prop al elemento input
                value={inputValue.cPago}
                onChange={handleChange}
              />
              <Inputs
                title="Linea de crédito"
                type="text"
                placeholder="Ej:40000"
                name="lcredito"
                value={inputValue.lcredito}
                onChange={handleChange}
              />
              <Inputs
                title="Lista de precios"
                type="text"
                placeholder=""
                name="lprecios"
                value={inputValue.lprecios}
                onChange={handleChange}
              />
            </div>

            <div>
              <TextTareas
                title="Notas"
                placeholder=""
                name="notas" // Asegúrate de que TextTareas acepte y pase este prop al elemento textarea
                value={inputValue.notas}
                onChange={handleChange}
              />

              <TextTareas
                title="Pie de página para proyecto"
                placeholder=""
                name="piepagina" // Asegúrate de que TextTareas acepte y pase este prop al elemento textarea
                value={inputValue.piepagina}
                onChange={handleChange}
              />
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default   CardClienteDGeneral ;
