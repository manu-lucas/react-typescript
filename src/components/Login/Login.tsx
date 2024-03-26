import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email incorrecto').required('Debe ingresar un email'),
    password: Yup.string().required('Debe ingresar una contraseña'),
  });

  const handleLogin = (values: FormValues, actions: any) => {
    // Handle form submission logic here
    console.log('Form submitted:', values);
    actions.setSubmitting(false);
  };

  const handlePasswordRecovery = () => {
    // Handle password recovery mode toggle
    setShowPasswordRecovery(true);
  };

  const handleBackToLogin = () => {
    // Handle back to login form
    setShowPasswordRecovery(false);
  };

  const handleRecoverPassword = (values: FormValues) => {
    // Handle password recovery logic here
    console.log('Recover password for:', values.email);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-96 m-20">
        <img src="/src/assets/logo_con_bajada.png" alt="Logo" />
      </div>
      <div className="bg-white rounded-lg p-8 shadow-md w-80 h-auto">
      <div className="w-16 m-auto ">
        <img src="/src/assets/pajarito.png" alt="Logo" />
      </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={showPasswordRecovery ? handleRecoverPassword : handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <fieldset>
                <legend className="text-lg text-center font-bold mb-4">
                  {showPasswordRecovery ? 'Recuperar contraseña' : 'Iniciar sesión'}
                </legend>
                {showPasswordRecovery ? (
                  <div className="mb-4">
                    <label htmlFor="user_email" className="block mb-1 font-body">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="user_email" // Ensure id matches htmlFor in the label
                      placeholder="Ingrese su email"
                      className="form-input w-full border-1 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage name="email" component="span" className="text-red-500" />
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      <label htmlFor="user_email" className="block mb-1">Email</label>
                      <Field
                        type="email"
                        name="email"
                        id="user_email" // Ensure id matches htmlFor in the label
                        placeholder="Ingrese su email"
                        className="form-input w-full border-1 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage name="email" component="span" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="user_password" className="block mb-1">Contraseña</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        className="form-input w-full border-1 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage name="password" component="span" className="text-red-500" />
                    </div>
                  </div>
                )}
                <div className="text-center">
                
                  <button type="submit" className="bg-verdeFondo w-full text-white px-4 py-2 rounded-lg disabled:bg-gray-400" disabled={isSubmitting}>
                    {isSubmitting ? (showPasswordRecovery ? 'Recuperando...' : 'Ingresando...') : (showPasswordRecovery ? 'Recuperar contraseña' : 'Ingresar')}
                  </button>
                  {showPasswordRecovery ? (
                    <p><button type="button" onClick={handleBackToLogin} className="text-enfasis pt-5 hover:text-blue-400">Ya tengo contraseña</button></p>
                  ) : (
                    <p><button type="button" onClick={handlePasswordRecovery} className="text-enfasis pt-5 hover:text-red-500">Olvidé mi contraseña</button></p>
                  )}
                </div>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
