import React, { useState } from "react";

interface TableColumn {
  name: string;
  key: string;
  renderCell: (rowData: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof typeof data[0] | null; direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });

  const handleSort = (key: keyof typeof data[0]) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    const key = sortConfig.key as keyof typeof data[0];
    if (sortConfig.direction === 'ascending') {
      if (typeof a[key] === 'string') {
        return a[key].localeCompare(b[key]); // Sort strings alphabetically
      } else {
        return a[key] - b[key]; // Sort numbers numerically
      }
    } else {
      if (typeof a[key] === 'string') {
        return b[key].localeCompare(a[key]); // Sort strings alphabetically
      } else {
        return b[key] - a[key]; // Sort numbers numerically
      }
    }
  });

  return (
    <table className="w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort(column.key as keyof typeof data[0])}
            >
              {column.name} {sortConfig.key === column.key && sortConfig.direction === 'ascending' ? '↑' : '↓'}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              >
                {column.renderCell(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
