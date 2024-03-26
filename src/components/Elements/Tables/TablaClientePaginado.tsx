import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

interface User {
  id: number;
  vencimiento: string;
  condicion: string;
  bruto: number;
  monto_pendiente: number;
  finalizada: boolean;
}

export const users: User[] = [
  {
    id: 1,
    vencimiento: "5/3/2023",
    condicion: "pago anticipado",
    bruto: 29.55,
    monto_pendiente: 29.55,
    finalizada: false,
  },
  {
    id: 2,
    vencimiento: "1/31/2024",
    condicion: "3 dias",
    bruto: 34.99,
    monto_pendiente: 34.99,
    finalizada: false,
  },
  {
    id: 3,
    vencimiento: "11/20/2023",
    condicion: "30 dias",
    bruto: 34.99,
    monto_pendiente: 34.99,
    finalizada: false,
  },
  {
    id: 4,
    vencimiento: "5/11/2023",
    condicion: "20 dias",
    bruto: 34.99,
    monto_pendiente: 34.99,
    finalizada: false,
  },
  {
    id: 5,
    vencimiento: "10/11/2023",
    condicion: "pago contrafactura",
    bruto: 25.65,
    monto_pendiente: 25.65,
    finalizada: false,
  },
  {
    id: 6,
    vencimiento: "8/5/2023",
    condicion: "-",
    bruto: 60.0,
    monto_pendiente: 60.0,
    finalizada: false,
  },
];

export default function TablaClientePaginado() {
  const [page, setPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState<keyof User | "">("");
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const sortedItems = React.useMemo(() => {
    if (!sortBy) return users; // If no sort criteria is set, return the original users array
    return [...users].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortBy, sortOrder, users]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sortedItems.slice(start, end);
  }, [page, sortedItems]);

  const formatCurrency = (value: number): string => `$${value.toFixed(2)}`;

  const handleSort = (column: keyof User) => {
    if (sortBy === column) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
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
        <TableColumn onClick={() => handleSort("vencimiento")}>
          VENCIMIENTO
        </TableColumn>
        <TableColumn onClick={() => handleSort("condicion")}>
          CONDICIÓN
        </TableColumn>
        <TableColumn onClick={() => handleSort("bruto")}>BRUTO</TableColumn>
        <TableColumn onClick={() => handleSort("monto_pendiente")}>
          MONTO PENDIENTE
        </TableColumn>
        <TableColumn onClick={() => handleSort("finalizada")}>
          FINALIZADA
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id.toString()}>
            <TableCell>{item.vencimiento}</TableCell>
            <TableCell>{item.condicion}</TableCell>
            <TableCell>{formatCurrency(item.bruto)}</TableCell>
            <TableCell>{formatCurrency(item.monto_pendiente)}</TableCell>
            <TableCell>{item.finalizada ? "Sí" : "No"}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
