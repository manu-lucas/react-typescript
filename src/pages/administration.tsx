import React from 'react';
import Nav from '../components/Navegation/Nav';
import Testing from './Testing';
import SearchSelect from '../components/Elements/Herramientas/SearchSelect';
import DateSelect from '../components/Elements/Herramientas/DateSelect';
import Search from '../components/Elements/Herramientas/Search';
import Button from '../components/Elements/Button/Button';




const Administration
: React.FC = () => {

    
  return (

<div className='h-screen w-full bg-green-200 flex flex-row'>
  <Nav /> {/* Render Nav component on the left side */}
  
      <div className="flex flex-col w-85"> {/* Create a column layout for the remaining content */}
        <div className='h-screen w-full bg-green-200 flex flex-row'>
        
          <DateSelect />
          
        </div>
        <div className='h-screen w-full bg-green-200 flex flex-row'>
          <Search />  
        <SearchSelect /> {/* Render SearchSelect component */}
        <Button name={'EMITIDAS'} /><Button name={'PENDIENTES'} /><Button name={'RECURRENTES'} />
        </div>
    <Testing /> {/* Render Testing component */}
    
    {/* Add more components or divs here */}
  </div>
</div>
            
    
    
  );
};

export default Administration
;
