import React from 'react';
import { useStore } from '../../../store/useStore';

const Products: React.FC = () => {
  const [bears] =useStore((state)=>[

    state.bears,
  ])
 return (
     <div  className='h-screen w-85 bg-green-200	' >
     <h2>Products</h2>
     <h3>{bears}</h3>
   </div>
   
   
  );
};


export default Products;
