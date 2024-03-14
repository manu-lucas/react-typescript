import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Table from "../components/Elements/Tables/Table";
import Nav from "../components/Navegation/Nav";


interface Sale {
  cliente: string;
  invoice: string;
  vendedor: string;
  fecha: number;
  monto: number;
  id: string;
}


const queryClient = new QueryClient()

const Testing: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {

  const { data: sales, isLoading, isError } = useQuery<Sale[]>("sales", async () => {
    const response = await fetch("http://localhost:3030/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const columns = [
      { name: "Invoice", key: "invoice", renderCell: (sale: Sale) => <span>{sale.invoice}</span> },
      { name: "Cliente", key: "cliente", renderCell: (sale: Sale) => <span>{sale.cliente}</span> },
      { name: "Vendedor", key: "vendedor", renderCell: (sale: Sale) => <span>{sale.vendedor}</span> },
      { name: "Fecha", key: "fecha", renderCell: (sale: Sale) => <span>{new Date(sale.fecha * 1000).toLocaleDateString()}</span> },
      { name: "Monto", key: "monto", renderCell: (sale: Sale) => <span>{sale.monto}</span> },
    ];

  return (
    <div className='h-screen w-full bg-green-200 flex flex-row'>
      <Nav />
      <Table columns={columns} data={sales} />
      
    </div>

  );
};

export default Testing;
