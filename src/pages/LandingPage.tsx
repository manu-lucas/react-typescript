import React from 'react';
/* import './styles/App.scss' */
import Login from '../components/Login/Login'


const LandingPage: React.FC = () => {
 return (
     <div  className='h-screen w-full bg-green-200	' >
      <Login />
   {/* {<DateSelect/>} */}
   </div>
   
   
  );
};


export default LandingPage;
