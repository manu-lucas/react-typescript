import React, { useState } from 'react';

interface IDataItem {
  id: number;
  name: string;
  age: number;
}

const TableTestSort: React.FC = () => {
  const [data, setData] = useState<IDataItem[]>([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Alice', age: 35 }
  ]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof IDataItem | null; direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });

  const handleSort = (key: keyof IDataItem) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
  const key = sortConfig.key as keyof IDataItem;
  if (sortConfig.direction === 'ascending') {
    if (key === 'name') {
      return a[key].localeCompare(b[key]); // Sort strings alphabetically
    } else {
      return a[key] - b[key]; // Sort numbers numerically
    }
  } else {
    if (key === 'name') {
      return b[key].localeCompare(a[key]); // Sort strings alphabetically
    } else {
      return b[key] - a[key]; // Sort numbers numerically
    }
  }
});

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')} className="cursor-pointer">
              ID {sortConfig.key === 'id' && sortConfig.direction === 'ascending' ? '↑' : '↓'}
            </th>
            <th onClick={() => handleSort('name')} className="cursor-pointer">
              Name {sortConfig.key === 'name' && sortConfig.direction === 'ascending' ? '↑' : '↓'}
            </th>
            <th onClick={() => handleSort('age')} className="cursor-pointer">
              Age {sortConfig.key === 'age' && sortConfig.direction === 'ascending' ? '↑' : '↓'}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTestSort;
