import React from "react";
import SelectStyle from "../Herramientas/SelectNextUI"; // Assuming this is a custom Select component
import DateSelect from "../Herramientas/DateSelect"; // Assuming this is a custom DateSelect component

interface ProdcutividadProps {
    title?: string;
}

interface propsCardProyect {
    titulo: string,
    numero: number
}

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
    return (
        <div className="w-auto mx-8 border">
            <div className="flex flex-row justify-between">
                <h2>{title}</h2> {/* Displaying the title prop */}

                <div className="flex flex-row">
                    <SelectStyle /> {/* Rendering the custom Select component */}
                    <div>
                        <DateSelect /> {/* Rendering the custom DateSelect component */}
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
                   <h2>sdds</h2>

                    </div> 

            </div>


           


        </div>
    );
};

export default Productividad;
