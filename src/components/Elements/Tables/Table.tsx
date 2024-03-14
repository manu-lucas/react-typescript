import React from "react";

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
  return (
    <table className="w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
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
