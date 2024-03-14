import React from 'react';
import FormikTest from '../components/Elements/Tables/FormikTest';
import Nav from '../components/Navegation/Nav';




const Administration
: React.FC = () => {

    
  return (
<div className='h-screen w-full bg-green-200 flex flex-row'>
      {/* <h2>Administration</h2> */}
      <Nav />
      <FormikTest />
            
</div>
  );
};

export default Administration
;
