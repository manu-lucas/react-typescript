import React, { useState } from 'react';
import { Input, Button, Table, Pagination } from  '@nextui-org/react';
import {
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/react";






// Example table row data type
interface TableRow {
  id: number;
  name: string;
  role: string;
  status: string;
}

// Example initial data
const initialData: TableRow[] = [
  { id: 1, name: 'Tony Reichert', role: 'CEO', status: 'Active' },
  { id: 2, name: 'Zoey Lang', role: 'Technical Lead', status: 'Paused' },
  { id: 3, name: 'Jane Fisher', role: 'Senior Developer', status: 'Active' },
  { id: 4, name: 'William Howard', role: 'Community Manager', status: 'Vacation' },
  // Add more rows as needed for your example
];

const Search: React.FC = () => {
  const [data, setData] = useState<TableRow[]>(initialData); // Initial data loaded here
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filterData = (term: string): TableRow[] => {
    if (!term.trim()) return data;
    return data.filter((row) =>
      Object.values(row).some(value =>
        value.toString().toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    const filteredData = filterData(searchTerm);
    setData(filteredData);
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-4">
      <Input
        color="primary"
        size="lg"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     <Button color="primary" onClick={handleSearch}>
        Search
      </Button>

      {/* Table rendering */}
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <Pagination showControls total={10} initialPage={1} />
      </div>
  );
};

export default Search;