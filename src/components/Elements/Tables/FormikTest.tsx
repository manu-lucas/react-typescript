import React from 'react';
import { Formik, Form, Field } from 'formik';

interface MyFormValues {
  firstName: string;
}

const FormikTest: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' };

  return (
     <div className="container mx-auto">
     <h1 className="text-2xl font-bold mb-4">My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className="max-w-md">
          <div className="mb-4"></div>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikTest;
