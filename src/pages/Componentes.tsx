import React from 'react';
import Nav from '../components/Navegation/Nav';
import { FaAngleDown } from 'react-icons/fa';
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

const data = [
  { label: "Estafania", value: "default" },
  { label: "Veronica", value: "opcion1" },
  { label: "Juan Carlos", value: "opcion2" },
  { label: "Lucas", value: "opcion3" },
  { label: "Exequiel", value: "opcion4" },
  { label: "Martin", value: "opcion5" },
];


const Componentes: React.FC = () => {


  return (
    <div className='h-screen w-85 bg-green-200 flex flex-row'>
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
          <Card  title="Cuentas" total={0} />
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
          <p>Componente: <code>&lt;DateSelect /&gt;</code></p>
          <DateSelect />

        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Search</h3>
          <hr />
          <Search />
          <hr />
          <p>Ruta: import Search from '../components/Elements/Herramientas/Search';</p>
          <p>Componente: <code>&lt;Search /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Search Select</h3>
          <hr />
          <SearchSelect />
          <hr />
          <p>Ruta: import SearchSelect from '../components/Elements/Herramientas/SearchSelect';</p>
          <p>Componente: <code>&lt;SearchSelect /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Select Period</h3>
          <hr />
          <SelectPeriod />
          <hr />
          <p>Ruta: import SelectPeriod from '../components/Elements/Herramientas/SelectPeriod';</p>
          <p>Componente: <code>&lt;SelectPeriod /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Select Style</h3>
          <hr />
          <SelectStyle data={data} />
          <hr />
          <p>Ruta: import SelectStyle from '../components/Elements/Herramientas/SelectNextUI'</p>
          <p>Componente: <code>&lt;SelectStyle /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Text Areas</h3>
          <hr />
          <TextTareas title='Area de texto' name='area de texto' value="" onChange={('')} />
          <hr />
          <p>Ruta: import TextTareas from '../components/Elements/Inputs/TextTareas';</p>
          <p>Componente: <code>&lt;TextTareas title='Area de texto' name='area de texto' value="" onChange={('')} /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Reference</h3>
          <hr />
          <Reference title='Etiqueta de Menú' icons= <FaAngleDown /> />
          <hr />
          <p>Ruta: import Reference from '../components/Elements/Reference';</p>
          <p>Componente: <code>&lt;Reference title='Etiqueta de Menú' icons= &lt;FaAngleDown/&gt; /&gt;</code></p>
        </div>

        <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Login</h3>
          <hr />
          <Login />
          <hr />
          <p>Ruta: import Login from '../components/Login/Login';</p>
          <p>Componente: <code>&lt;Login /&gt;</code></p>
        </div>
         <div className='rounded-[10px] p-[10px] bg-white border solid m-[10px]'>
          <h3 className='text-red-600'>Input</h3>
          <hr />
          <Inputs title={'example'} type={'example'} value={'example'} name={'example'} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
          } }/>
          <hr />
          <p>Ruta: import Login from './components/Elements/Inputs/Inputs';</p>
          <p>Componente: <code>&lt;Inputs /&gt;</code></p>
        </div>

      </div>
    </div>
  );
};

export default Componentes;
