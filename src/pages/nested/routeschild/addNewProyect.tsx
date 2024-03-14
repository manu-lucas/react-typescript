import React from "react";
// import CardClienteDGeneral  from "../../../components/Elements/Cards/CardClienteDGeneral";




const AddNewProyect: React.FC = () => {

  const proyecto:string= "000000001"
  

  const fecha: Date = new Date();
  const fechaString: string = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;



  return (
    <div className="h-screen w-full overflow-y-auto	 ">
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

    
   
    


</div>

  </div>
  );
};

export default AddNewProyect;
