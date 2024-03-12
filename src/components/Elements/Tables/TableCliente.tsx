import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

interface Row {
    [key: string]: any;
    id: number;
    fecha: string;
    service: string;
    profesional: string;
    neto: number;
    total: number;
}

interface Column {
    key: string;
    label: string;
}

const rows: Row[] = [
    {
        id: 1,
        fecha: "22/02/2024",
        service: "servicio 1",
        profesional: "Veronica",
        neto: 802562,
        total: 324791,
    },
    {
        id: 2,
        fecha: "11/06/2023",
        service: "servicio 2",
        profesional: "Estefania",
        neto: 567961,
        total: 424690,
    },
    {
        id: 3,
        fecha: "27/03/2023",
        service: "servicio 3",
        profesional: "Aldana",
        neto: 411317,
        total: 567897,
    }
];

const columns: Column[] = [
    {
        key: "fecha",
        label: "Fecha/Hora",
    },
    {
        key: "service",
        label: "Service",
    },
    {
        key: "profesional",
        label: "Prof.asignado",
    },
    {
        key: "neto",
        label: "Neto",
    },
    {
        key: "total",
        label: "Total",
    },
];

const TableCliente: React.FC = () => {

    return (
        
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.id.toString()}>
                        {columns.map((column) => (
                            <TableCell key={column.key}>
                                {column.key === 'neto' || column.key === 'total' ? `$${item[column.key]}` : item[column.key]}
                            </TableCell>
                        ))}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default TableCliente;
