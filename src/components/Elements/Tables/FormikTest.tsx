import React from 'react';
import { Formik, Form, Field } from 'formik';


interface MyFormValues {
  razon: string;
  rut: string;
  giro: string;
  direccion: string;
  comuna: string;
  ciudad: string;
}

const FormikTest: React.FC<{}> = () => {
  const initialValues: MyFormValues = {  razon: "",
    rut: "",
    giro: "",
    direccion: "",
    comuna: "",
    ciudad: "",
    };

  return (
     <div className="container mx-auto flex justify-center">
     {/* <h1 className="text-2xl font-bold mb-4">My Example</h1> */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className="max-w-md">
          <div className="mb-4 ">
          <label className="m-8" htmlFor="DatosGenerales">Datos Generales</label>
          <Field className="block w-full p-2 border rounded-md" id="razon" name="razon" placeholder="Razon Social" />
          <Field className="block w-full p-2 border rounded-md" id="rut" name="rut" placeholder="rut" />
          <Field className="block w-full p-2 border rounded-md" id="giro" name="giro" placeholder="giro" />
          <Field className="block w-full p-2 border rounded-md" id="direccion" name="direccion" placeholder="direccion" />
          <Field className="block w-full p-2 border rounded-md" id="comuna" name="comuna" placeholder="comuna" />
          <Field className="block w-full p-2 border rounded-md" id="ciudad" name="ciudad" placeholder="ciudad" />
            </div>
           <div className="mb-4 ">
          <label className="m-8" htmlFor="Contacto">Contacto</label>
          <Field className="block w-full p-2 border rounded-md"  id="nombre" name="nombre" placeholder="Nombre" />
          <Field className="block w-full p-2 border rounded-md"  id="apellido" name="apellido" placeholder="Apellido" />
          <Field className="block w-full p-2 border rounded-md"  id="telefono" name="telefono" placeholder="Telefono" />
            </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </Form>
      </Formik>
    </div>
    
  );
};

export default FormikTest;
