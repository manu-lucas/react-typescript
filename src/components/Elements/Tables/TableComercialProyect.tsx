import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

export const users = [
  { id: 1,nombre:"Lucas", estado:"creado",fecha: "5/3/2023", cliente: "Martin", producto: "Servicio A", vendedor: "Estefania",neto:25.990,total:25.900 },
  { id: 2,nombre:"Martin", estado:"creado",fecha: "5/3/2023", cliente: "Martin", producto: "Servicio A", vendedor: "Estefania",neto:25.990,total:25.900 },
  { id: 3,nombre:"Lucas", estado:"creado",fecha: "5/3/2023", cliente: "Martin", producto: "Servicio A", vendedor: "Estefania",neto:25.990,total:25.900 },
  { id: 4,nombre:"Lucas", estado:"creado",fecha: "5/3/2023", cliente: "Martin", producto: "Servicio A", vendedor: "Estefania",neto:25.990,total:25.900 },
  { id: 5,nombre:"Lucas", estado:"creado",fecha: "5/3/2023", cliente: "Martin", producto: "Servicio A", vendedor: "Estefania",neto:25.990,total:25.900 },
  { id: 6,nombre:"Lucas", estado:"creado",fecha: "5/3/2023", cliente: "Martin", producto: "Servicio A", vendedor: "Estefania",neto:25.990,total:25.900 },

];





export default function TablaComercialProyect() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 2;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const formatCurrency = (value: number | null | undefined): string => {
    if (value == null) return "-";
    return `$${value.toFixed(3)}`; // Usar toFixed(2) para mostrar dos decimales
  };

  return (
    <Table
      aria-label="Tabla con paginación del lado del cliente"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="nombre">Nombre</TableColumn>
        <TableColumn key="estado">Estado</TableColumn>
        <TableColumn key="fecha">Fecha</TableColumn>
        <TableColumn key="cliente">Cliente</TableColumn>
        <TableColumn key="producto">Producto/Servicio</TableColumn>
        <TableColumn key="vendedor">Vendedor</TableColumn>
        <TableColumn key="neto">Neto</TableColumn>
        <TableColumn key="total">Total</TableColumn>



      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id.toString()}>
            <TableCell>{item.nombre}</TableCell>
            <TableCell>{item.estado}</TableCell>
            <TableCell>{item.fecha}</TableCell>

            <TableCell>{item.cliente}</TableCell>
            <TableCell>{item.producto}</TableCell>
            <TableCell>{item.vendedor}</TableCell>

            <TableCell>{formatCurrency(item.neto)}</TableCell>
            <TableCell>{formatCurrency(item.total)}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
