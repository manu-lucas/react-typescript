import React from 'react';

interface DatosProps {
  name: string;
  email: string;
  phone: string;
  cargo: string;
  fnacimiento: string; // Assuming format is suitable for display
  status: string;
}

function MyDatos({ name, email, phone, cargo, fnacimiento, status }: DatosProps) {
  return (
    <div className="flex flex-row bg-slate-50 rounded-3xl p-4 items-center space-x-4">
    <div className='w-20 h-20 bg-slate-400 rounded-full overflow-hidden'>
      <img src="" alt="Picture" className="w-full h-full object-cover" /> {/* Mejora para mostrar la imagen correctamente */}
    </div>
    <div className="space-y-1">
      <h4 className="font-semibold">{name}</h4> {/* Añadir estilos para el título */}
      <p>{email}</p> {/* Cambiar h4 por p para los valores */}
      <p>{phone}</p>
    </div>
    <div className="space-y-1">
      <p><span className="font-semibold">Cargo:</span> {cargo}</p>
      <p><span className="font-semibold">Fecha de nacimiento:</span> {fnacimiento}</p>
      <p><span className="font-semibold">Estado:</span> {status}</p>
    </div>
  </div>
  );
}

function MyTableEmpresa() {
 
 
  const data = [
    { name:"Proyecto",
      activo: true,
      soloVer: false,
      administrar: true,
      todo: true,
      propietario: true,
    }
    // {
    //   name:"Clientes",
    //   activo: false,
    //   soloVer: true,
    //   administrar: false,
    //   todo: false,
    //   propietario: false,
    // }
  ];
  return (
    <div className="flex flex-row bg-slate-50   w-full	 ">
       <table  className='w-full  text-left '>
      <thead  className='bg-blue-500 text-white'>
        
        <tr>
          <th className='p-2'>Comercial</th>
           <th ></th>
          <th> </th>
          <th ></th>
          <th></th>
          <th ></th> 
        </tr>
      </thead>
      <tbody>
        {data.map((fila, index) => (
          <tr key={index} className='border-b'>
            <td className='p-2'>{fila.name}</td>
            
            <td className='p-2'>
            <input
                type="radio"
                checked={fila.activo}
              />              </td>
            <td className='p-2' >
            <input
                type="radio"
                checked={fila.soloVer}
              />
              </td>
            <td  className='p-2'>
            <input
                type="radio"
                checked={fila.administrar}
              />
              </td>
            <td className='p-2'>
            <input
                type="radio"
                checked={fila.todo}
              />
              </td>
            <td className='p-2'>
               <input
                type="radio"
                checked={fila.propietario}
              />
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

const Myperfil: React.FC = () => {

  
  // Assuming you have data for your employees:
  const employeeData: DatosProps = {
    name: 'Juan Aguilera',
    email: 'app@wecom.global',
    phone: '+1234567890',
    cargo: 'Software Engineer',
    fnacimiento: '1990-01-01', // Adjust format if necessary
    status: 'Active',
  };

  return (
    <div className="w-140 mx-auto mt-10">
      <MyDatos {...employeeData} /> {/* Spread operator for concise data passing */}
      <table  className='w-full   mt-9'>
      <thead  className='border border-solid border-current	 rounded-3xl  '>
         <tr className='w-10 border-solid border-2'>
          <th className='w-10 border-solid border-2'></th>
          <th className='w-10 border-solid border-2'>Inactivo</th>
          <th className='w-10 border-solid border-2'>Solo Ver</th>
          <th className='w-10 border-solid border-2' >Administrar</th>
          <th className='w-10 border-solid border-2'>Todo</th>
          <th className='w-10 border-solid border-2'>Propietario</th>
        </tr> 
         </thead>
        </table>
     <MyTableEmpresa/>
    </div>
  );
};

export default Myperfil;