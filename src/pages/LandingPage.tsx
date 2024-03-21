import React from 'react';
/* import './styles/App.scss' */
import Login from '../components/Login/Login'
/* import DateSelect from '../components/Navegation/DateSelect'; */


const LandingPage: React.FC = () => {
  return (
    <div className='h-screen w-full bg-verdeFondo	' >
      <Login />

      {/* {<DateSelect/>} */}
    </div>


  );
};


export default LandingPage;
