import React from "react";
import SelectStyle from "../../../components/Elements/Herramientas/SelectNextUI";
import Inputs from "../../../components/Elements/Inputs/Inputs";
import SwitchComponent from "../../../components/Elements/Button/Switch";
import SliderGraf from "../../../components/Elements/Graficos/SliderGraf";
// import CardClienteDGeneral  from "../../../components/Elements/Cards/CardClienteDGeneral";

const data = [
  { label: "Estafania", value: "default" },
  { label: "Veronica", value: "opcion1" },
  { label: "Juan Carlos", value: "opcion2" },
  { label: "Lucas", value: "opcion3" },
  { label: "Exequiel", value: "opcion4" },
  { label: "Martin", value: "opcion5" },
];


const AddNewProyect: React.FC = () => {
  const proyecto: string = "000000001";

  const fecha: Date = new Date();
  const fechaString: string = `${fecha.getFullYear()}-${(fecha.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${fecha.getDate().toString().padStart(2, "0")}`;

  function onChange() {}

  return (
    <div className="h-screen w-85 overflow-y-auto	 ">
      <div className=" w-4/5	mx-auto mb-2   mt-6 rounded-3xl	 p-6 bg-white  shadow-7xl">
        <div className="flex flex-row">
          <h2 className="mr-5">Proyectos</h2>
          <h2 className="mr-5">Consulta</h2>
          <h2>E-commerce</h2>
        </div>
        <div className="flex flex-row">
          <h2 className="mx-2">Proyecto</h2>
          <h2 className="mx-2">{proyecto}</h2>
          <h2 className="mx-2">{fechaString}</h2>
        </div>
        <div className="flex flex-row">
          <div className="my-5 w-2/5	">
            <div className="flex flex-row ">
              <SelectStyle title="Cliente" data={data} />
              <SelectStyle title="Contacto"  data={data} />
            </div>
            <div className="w-full mt-2">
              <Inputs onChange={onChange} title="Nombre / Etiqueta" />
            </div>
          </div>
          <div className="w-1/5	"></div>
          <div className="my-5 w-2/5	">
            <div className="flex flex-row ">
              <SelectStyle title="Vendedor"  data={data} />
              <div>
                <Inputs onChange={onChange} title="Comisión" placeholder="0" />
              </div>
            </div>
            <div className="flex flex-row  mt-2">
              <SelectStyle title="C.de pago"  data={data} />
              <div>
                <Inputs onChange={onChange} title="Comisión" placeholder="0" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-grey-500 border-solid border"></div>

        <h2>Items</h2>

        <div className="flex flex-row">
          <div className="my-5 w-1/2	flex flex-row	">
            <SelectStyle title="Producto/Servicio"  data={data} />
            <Inputs title="Cantidad" onChange={onChange} />
            <Inputs title="Precio" onChange={onChange} />
            <div className="w-15 text-center">
              <Inputs title="-%" onChange={onChange} />
            </div>
          </div>
          <div className="my-5 w-1/2	ml-11	">
            <div className="flex  flex-row  items-end	">
              <Inputs title="Neto" onChange={onChange} />
              <Inputs title="IVA" onChange={onChange} />
              <Inputs title="Total" onChange={onChange} />
              <SwitchComponent />
            </div>
            <div>
              <h2>Ajuste de precio</h2>
              <SliderGraf />
              <h3>Subtotal : {}</h3>
              <h3>Iva(19%) : {}</h3>
              <h3>Total : {}</h3>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row">
          
          <div className="my-5 w-1/2	ml-11 flex flex-col	">
          <div className="border-b border-grey-500 border-solid border"></div>

            <h3>Direccíon de Prestación</h3>
              <div className="w-full"> 
              <SelectStyle title="Punto de despacho" placeholder=""  data={data}/>
              </div>

              <Inputs  title="Dirección" onChange={onChange} />
          </div>


          <div className="my-5 w-1/2	ml-11	">
            <div className="border-b border-grey-500 border-solid border"></div>

            <h3>Agendamiento</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProyect;
