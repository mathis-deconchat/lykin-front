import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ChartsPage = () => {
  return (
    <div className="rounded-t-2xl bg-gray-100 w-full h-screen flex flex-col mb-14  p-4">
      <p className="font-bold text-xl">Graphiques</p>
      <div className="flex overflow-y-auto mt-2 space-x-3 shadow-sm mb-2 pb-3">
        <a className="bg-gray-300 rounded-full px-6 py-1 text-black text-sm">
          Catégories
        </a>
        <a className="bg-gray-300 rounded-full px-6 py-1 text-black text-sm">
          Utilisateur
        </a>
        <a className="bg-gray-300 rounded-full px-6 py-1 text-black text-sm">
          Date
        </a>
        <a className="bg-gray-300 rounded-full px-6 py-1 text-black text-sm">
          Groupe
        </a>
        <a className="bg-gray-300 rounded-full px-6 py-1 text-black text-sm">
          Autre
        </a>
      </div>
      <div className="w-full flex flex-col justify-center">
        <PieChart height={200} width={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <ResponsiveContainer width="100%" height="50%">
          <LineChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsPage;
