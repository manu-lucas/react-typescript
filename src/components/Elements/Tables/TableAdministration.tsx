import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Table from "./Table";
import Nav from "../../Navegation/Nav";
import { useDateContext } from "../../Contexts/DateContext";

interface Sale {
  cliente: string;
  invoice: string;
  vendedor: string;
  fecha: number;
  monto: number;
  id: string;
}

interface TableAdministrationProps {
  searchValue: string;
}

const TableAdministration: React.FC<TableAdministrationProps> = ({
  searchValue,
}) => {
  const { startDate, endDate } = useDateContext();
  const queryClient = new QueryClient();

  const {
    data: sales,
    isLoading,
    isError,
  } = useQuery<Sale[]>("sales", async () => {
    const response = await fetch("http://localhost:3030/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  });

  // Filter sales data based on start and end dates
  const filteredSales = sales
    ? sales.filter((sale) => {
        const saleDate = new Date(sale.fecha * 1000);
        const searchTerm = searchValue.toLowerCase();
        return (
          saleDate >= startDate &&
          saleDate <= endDate &&
          (sale.cliente.toLowerCase().includes(searchTerm) ||
            sale.invoice.toLowerCase().includes(searchTerm) ||
            sale.vendedor.toLowerCase().includes(searchTerm))
        );
      })
    : [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

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
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-full bg-green-200 flex flex-row">
        {/* <Nav /> */}
        <Table columns={columns} data={filteredSales} />
      </div>
    </QueryClientProvider>
  );
};

export default TableAdministration;
