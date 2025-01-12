import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesChart({ data }) {
  const chartData = useMemo(
    () => ({
      labels: data.map((item) => item.date),
      datasets: [
        {
          label: 'Sales',
          data: data.map((item) => item.amount),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    }),
    [data]
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Trend',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Sales Metrics</h2>
      <Line options={options} data={chartData} />
    </div>
  );
}
