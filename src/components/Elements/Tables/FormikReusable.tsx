import React from "react";
import { Formik, Form, Field } from "formik";

interface FieldConfig {
  name: string;
  label: string;
  type: string;
}

interface FormProps {
  fields: FieldConfig[];
  onSubmit: (values: any) => void;
}

const FormikReusable: React.FC<FormProps> = ({ fields, onSubmit }) => {
  return (
    <Formik
      initialValues={fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {} as any)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-sm mx-auto">
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <Field
                type={field.type}
                name={field.name}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
          ))}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isSubmitting ? "Creando..." : "Crear"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikReusable;
