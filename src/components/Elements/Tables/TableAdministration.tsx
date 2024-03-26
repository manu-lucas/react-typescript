import React from "react";
import Table from "./Table";

interface Sale {
  cliente: string;
  fecha: number;
  id: string;
  invoice: string;
  monto: number;
  vendedor: string;
}
interface DateState {
  dateStart: Date;
  dateEnd: Date;
}

interface TableAdministrationProps {
  searchValue: string;
  data: Sale[]; // Utiliza el tipo de array de Sale aquí
  fechas: DateState; // Asegúrate de que este tipo coincide con cómo lo defines y lo pasas
}

const TableAdministration: React.FC<TableAdministrationProps> = ({
  searchValue,
  fechas,
  data,
}) => {
  console.log(data);

  const { dateStart, dateEnd } = fechas;

  // Filter sales data based on start and end dates
  const filteredSales = data
    ? data.filter((sale) => {
        const saleDate = new Date(sale.fecha * 1000);
        const searchTerm = searchValue.toLowerCase();
        return (
          saleDate >= dateStart &&
          saleDate <= dateEnd &&
          (sale.cliente.toLowerCase().includes(searchTerm) ||
            sale.invoice.toLowerCase().includes(searchTerm) ||
            sale.vendedor.toLowerCase().includes(searchTerm))
        );
      })
    : [];

  const columns = [
    {
      name: "Invoice",
      key: "invoice",
      renderCell: (sale: Sale) => <span>{sale.invoice}</span>,
    },
    {
      name: "Cliente",
      key: "cliente",
      renderCell: (sale: Sale) => <span>{sale.cliente}</span>,
    },
    {
      name: "Vendedor",
      key: "vendedor",
      renderCell: (sale: Sale) => <span>{sale.vendedor}</span>,
    },
    {
      name: "Fecha",
      key: "fecha",
      renderCell: (sale: Sale) => (
        <span>{new Date(sale.fecha * 1000).toLocaleDateString()}</span>
      ),
    },
    {
      name: "Monto",
      key: "monto",
      renderCell: (sale: Sale) => <span>{sale.monto}</span>,
    },
    {
      name: "Acciones",
      key: "acciones",
      renderCell: (sale: Sale) => <span>{""}</span>,
    },
  ];

  return (

    <div className="h-screen w-full bg-green-200 flex flex-row">
      {/* <Nav /> */}
      <Table columns={columns} data={filteredSales} />
    </div>
  );
};

export default TableAdministration;
