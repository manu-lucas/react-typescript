import { FC, ReactNode, useState } from "react";
import { invoiceContext, initialInvoiceData } from "../context";
import { IInvoice } from "../interfaces/invoice";

interface ProviderProps {
  children: ReactNode;
  value?: IInvoice;
}

const InvoiceProvider: FC<ProviderProps> = ({ children, value }) => {
  const [invoice, setInvoice] = useState<IInvoice>(value || initialInvoiceData);
  return (
    <invoiceContext.Provider value={{ invoice, setInvoice }}>
      {children}
    </invoiceContext.Provider>
  );
};

export default InvoiceProvider;
