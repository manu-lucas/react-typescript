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
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
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
      <div className="logo">
        <img src="/src/assets/logo_appify.jpeg" alt="Logo" />
      </div>
      <div className="bg-white rounded p-8 shadow-md w-80">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={showPasswordRecovery ? handleRecoverPassword : handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <fieldset>
                <legend className="text-lg font-bold mb-4">
                  {showPasswordRecovery ? 'Recuperar contraseña' : 'Iniciar sesión'}
                </legend>
                {showPasswordRecovery ? (
                  <div className="mb-4">
                    <label htmlFor="user_email" className="block mb-1">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="user_email" // Ensure id matches htmlFor in the label
                      placeholder="mail@mail.com"
                      className="form-input w-full"
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
                        placeholder="mail@mail.com"
                        className="form-input w-full"
                      />
                      <ErrorMessage name="email" component="span" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="user_password" className="block mb-1">Contraseña</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="********"
                        className="form-input w-full"
                      />
                      <ErrorMessage name="password" component="span" className="text-red-500" />
                    </div>
                  </div>
                )}
                <div className="text-center">
                 

                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400" disabled={isSubmitting}>
                    {isSubmitting ? (showPasswordRecovery ? 'Recuperando...' : 'Ingresando...') : (showPasswordRecovery ? 'Recuperar contraseña' : 'Ingresar')}
                  </button>
                  {showPasswordRecovery ? (
                    <p><button type="button" onClick={handleBackToLogin} className="text-blue-500">Ya tengo contraseña</button></p>
                  ) : (
                    <p><button type="button" onClick={handlePasswordRecovery} className="text-blue-500">Olvidé mi contraseña</button></p>
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
