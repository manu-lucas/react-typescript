import React from 'react';

interface BarraProgresoProps {
  facturado: number;
  noFacturado: number;
}

const BarraProgreso: React.FC<BarraProgresoProps> = ({ facturado, noFacturado }) => {
  const total = facturado + noFacturado;
  const porcentajeFacturado = (facturado / total) * 100;
  const porcentajeNoFacturado = (noFacturado / total) * 100;

  return (
    <>  
    <div className='flex flex-row justify-between'>  
    <h2>Facturado : {porcentajeFacturado}%</h2> 
    <h2>No Facturado : {porcentajeNoFacturado}%</h2> 
    </div>


    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '30px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
      <div style={{ width: `${porcentajeFacturado}%`, height: '100%', backgroundColor: '#529438', borderRadius: '5px 0 0 5px' }}></div>
      <div style={{ width: `${porcentajeNoFacturado}%`, height: '100%', backgroundColor: '#EF233C', borderRadius: '0 5px 5px 0' }}></div>
    </div>
    </>
  );
}

export default BarraProgreso;
