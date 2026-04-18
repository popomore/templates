import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: { name: string; value: number }[];
  title?: string;
}

export function Chart({ data, title }: ChartProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      {title && <h3 className="mb-4 text-sm font-medium text-gray-700">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
