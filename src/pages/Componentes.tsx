import React from 'react';
import Nav from '../components/Navegation/Nav';
import Aside from '../components/Aside/Aside';
import AsideComercial from '../components/Aside/AsideComercial';
import Button from '../components/Elements/Button/Button';
import Card from '../components/Elements/Cards/Card';
import CardCliente from '../components/Elements/Cards/CardCliente';
import CardClienteContacto from '../components/Elements/Cards/CardClienteContacto';
import CardClienteDGeneral from '../components/Elements/Cards/CardClienteDGeneral';
import CardClienteThree from '../components/Elements/Cards/CardCLienteThree';
import CardClienteTwo from '../components/Elements/Cards/CardClienteTwo';
import Productividad from '../components/Elements/Graficos/Productividad';
import DateSelect from '../components/Elements/Herramientas/DateSelect';
import Search from '../components/Elements/Herramientas/Search';
import SearchSelect from '../components/Elements/Herramientas/SearchSelect';
import SelectPeriod from '../components/Elements/Herramientas/SelectPeriod';
import SelectStyle from '../components/Elements/Herramientas/SelectNextUI';
import Inputs from '../components/Elements/Inputs/Inputs';
import TextTareas from '../components/Elements/Inputs/TextTareas';
import Reference from '../components/Elements/Reference';
import Login from '../components/Login/Login';




const Componentes: React.FC = () => {


  return (
    <div className='h-screen w-full bg-green-200 flex flex-row'>
      {/* <h2>Administration</h2> */}
      <Nav />
      <div>
        <h2 >Repositorio de componenetes utilizados</h2>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Aside</h3>
          <hr />
          <Aside />
          <hr />
          <p>Ruta: <code>import Aside from '../components/Aside/Aside';</code></p>
          <p>Componente: <code>&lt;Aside /&gt;</code></p>
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Aside Comercial</h3>
          <hr />
          <AsideComercial />
          <hr />
          <p>Ruta: <code>import AsideComercial from '../components/Aside/AsideComercial';</code></p>
          <p>Componente: <code>&lt;AsideComercial /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Botones</h3>
          <hr />
          <Button name="Botón de ejemplo" />
          <hr />
          <p>Ruta: <code>import Button from '../components/Elements/Button/Button';</code></p>
          <p>Componente: <code>&lt;Button name="Texto a mostrar" /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Cards</h3>
          <hr />
          <Card />
          <hr />
          <p>Ruta: <code>import Card from '../components/Elements/Cards/Card';</code></p>
          <p>Componente: <code>&lt;Card /&gt;</code></p>
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Card Cliente</h3>
          <CardCliente />
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Card Cliente Contacto</h3>
          <CardClienteContacto />
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Card Cliente DGeneral</h3>
          <CardClienteDGeneral />
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Card Cliente Three</h3>
          <CardClienteThree />
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Card Cliente Two</h3>
          <CardClienteTwo />
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>
        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Date Select</h3>
          <p>import DateSelect from '../components/Elements/Herramientas/DateSelect';</p>
          <p>Componente: <pre>&lt;DateSelect /&gt;</pre></p>
          <DateSelect />

        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Productividad</h3>
          <Productividad />
        </div>


      </div>



    </div>
  );
};

export default Componentes;
