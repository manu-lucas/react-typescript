import React from "react";
import FormikReusable from "./FormikReusable";

const Transaction: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  const fields = [
    { name: "bancos", label: "bancos", type: "text" },
    { name: "cuentas", label: "cuentas", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ];

  return (
    <div>
      <FormikReusable fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default Transaction;
