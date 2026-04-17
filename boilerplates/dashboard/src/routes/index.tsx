import { Chart } from "../components/Chart";
import { useAppStore } from "../stores/app";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 280 },
  { name: "May", value: 590 },
  { name: "Jun", value: 320 },
];

export function DashboardPage() {
  const title = useAppStore((s) => s.title);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="text-sm text-gray-500">Total Users</div>
          <div className="text-2xl font-semibold">1,234</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="text-sm text-gray-500">Active Today</div>
          <div className="text-2xl font-semibold">567</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="text-sm text-gray-500">Revenue</div>
          <div className="text-2xl font-semibold">$12,345</div>
        </div>
      </div>
      <Chart data={chartData} title="Monthly Overview" />
    </div>
  );
}
