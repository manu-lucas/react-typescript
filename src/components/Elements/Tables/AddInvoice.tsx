import React from "react";
import { useQuery } from "react-query";
import { Field, Form, Formik } from "formik";
import axios from "axios";

const AddInvoice: React.FC = () => {
  const {
    data: banks,
    isLoading,
    isError,
  } = useQuery("banks", async () => {
    const response = await axios.get("http://localhost:3030/banks");
    return response.data;
  });

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="max-w-md mx-auto mt-8">
      <Formik
        initialValues={{
          Bancos: "",
          Cuentas: "",
          email: "",
          tipo: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Bancos"
            >
              Bancos
            </label>
            <Field
              name="Bancos"
              as="select"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a Bank</option>
              {banks.map((bank: any) => (
                <option key={bank.account} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </Field>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Cuentas"
            >
              Cuentas
            </label>
            <Field
              name="Cuentas"
              as="select"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select an Account</option>
              {banks.map((bank: any) => (
                <option key={bank.account} value={bank.account}>
                  {bank.account}
                </option>
              ))}
            </Field>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="movimiento"
              className="block text-sm font-bold mb-2"
            >
              Movimiento / $
            </label>
            <Field
              name="movimiento"
              as="select"
              className="p-2 border rounded w-full"
            >
              <option value="">Select a movement</option>
              <option value="Debe">Debe</option>
              <option value="Haber">Haber</option>
            </Field>
            <Field
              type="number"
              name="monto"
              className="p-2 border rounded w-full mt-2"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-sm font-bold mb-2">
              Fecha de transaccion
            </label>
            <Field
              type="date"
              name="fecha"
              className="p-2 border rounded w-full"
              placeholder="Select transaction date"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="movimiento"
              className="block text-sm font-bold mb-2"
            >
              Tipo de comprobante
            </label>
            <Field
              name="Tipo"
              as="select"
              className="p-2 border rounded w-full"
            >
              <option value="">Voucher</option>
              <option value="Factura exenta">Factura exenta</option>
              <option value="Nota de credito">Nota de credito</option>
              <option value="Nota de debito">Nota de debito</option>
            </Field>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crear
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddInvoice;
