import React from 'react';
import { useStore } from '../../../store/useStore';
import { Link } from 'react-router-dom';

const Usuarios: React.FC = () => {
  const [bears,increase] = useStore((state) =>[
    state.bears,
    state.increase
  ]);

  return (
    <div className='h-screen w-85 bg-green-200'>
      <h2>Usuarios</h2>
      <h3>{bears}</h3>
      <button   onClick={()=>increase()}>incrementar</button>

      <div className='block'></div>
      <Link to="/miempresa/productos">ir a</Link>
    </div>
  );
};

export default Usuarios;
