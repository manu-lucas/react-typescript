import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// Definición de la interfaz para las props del componente
interface PropsChart {
  data: { name: string; uv: number; pv?: number; amt?: number }[];
}

// Componente funcional de React que utiliza la interfaz PropsChart
export  const LineChartComponent: React.FC<PropsChart> = ({ data }) => {
  return (
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};
