import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

export const users = [
  { id: 1, vencimiento: "5/3/2023", condicion: "pago anticipado", bruto: 29.550, monto_pendiente: 29.550, finalizada: false },
  { id: 2, vencimiento: "1/31/2024", condicion: "3 dias", bruto: 34.990, monto_pendiente: 34.990, finalizada: false },
  { id: 3, vencimiento: "11/20/2023", condicion: "30 dias", bruto: 34.990, monto_pendiente: 34.990, finalizada: false },
  { id: 4, vencimiento: "5/11/2023", condicion: "20 dias", bruto: 34.990, monto_pendiente: 34.990, finalizada: false },
  { id: 5, vencimiento: "10/11/2023", condicion: "pago contrafactura", bruto: 25.650, monto_pendiente: 25.650, finalizada: false },
  { id: 6, vencimiento: "8/5/2023", condicion: "-", bruto: 60.000, monto_pendiente: 60.000, finalizada: false }
];





export default function TablaClientePaginado() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

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
        <TableColumn key="vencimiento">VENCIMIENTO</TableColumn>
        <TableColumn key="condicion">CONDICIÓN</TableColumn>
        <TableColumn key="bruto">BRUTO</TableColumn>
        <TableColumn key="monto_pendiente">MONTO PENDIENTE</TableColumn>
        <TableColumn key="finalizada">FINALIZADA</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id.toString()}>
            <TableCell>{item.vencimiento}</TableCell>
            <TableCell>{item.condicion}</TableCell>
            <TableCell>{formatCurrency(item.bruto)}</TableCell>
            <TableCell>{formatCurrency(item.monto_pendiente)}</TableCell>
            <TableCell>{item.finalizada ? 'Sí' : 'No'}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
