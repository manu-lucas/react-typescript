import React from "react";
import SelectStyle from "../Herramientas/SelectNextUI"; // Assuming this is a custom Select component
import DateSelect from "../Herramientas/DateSelect"; // Assuming this is a custom DateSelect component
import BarraProgreso from "./BarraPresupuesto"

interface ProdcutividadProps {
    title?: string;
}

interface propsCardProyect {
    titulo: string,
    numero: number
}

const data = [
    { label: "Estafania", value: "default" },
    { label: "Veronica", value: "opcion1" },
    { label: "Juan Carlos", value: "opcion2" },
    { label: "Lucas", value: "opcion3" },
    { label: "Exequiel", value: "opcion4" },
    { label: "Martin", value: "opcion5" },
  ];

const CardProyecto: React.FC<propsCardProyect> = ({ titulo, numero }) => {
    return (
        <div className="border-solid border	border-gray-300		 rounded-md

        w-44 h-36 bg-white ">
            <h4 className="text-center">{titulo}</h4> 
            <h2 className=" text-5xl	 text-center	">{numero}</h2>
        </div>


    );
};

const Productividad: React.FC<ProdcutividadProps> = ({ title }) => {
    const facturado = 70;
  const noFacturado = 30;
    return (
        <div className="w-auto mx-8   border-2	pt-4">
            <div className="flex flex-row justify-between">
                <h2>{title}</h2> {/* Displaying the title prop */}

                <div className="flex flex-row">
                    <div className=" w-32 h-9"> 
                    <SelectStyle  data={data} /> 
                    </div>
                    <div>
                        <DateSelect /> 
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-around my-6"> 
            <CardProyecto titulo="Proyecto" numero={7} />
            <CardProyecto titulo="Conversiones" numero={8} />
            <CardProyecto titulo="Clientes Nuevos" numero={10} />
            </div>
            <div className=" w-auto border-solid border border-gray-400 mx-5"></div>
            <div>
                <h2 >Presupuesto</h2>
                   <div className="m-5 w-auto">  
                <BarraProgreso facturado={facturado} noFacturado={noFacturado}/>
                    </div> 

            </div>


           


        </div>
    );
};

export default Productividad;
