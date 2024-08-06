// src/ChartWidget.js

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

// eslint-disable-next-line react/prop-types
const ChartWidget = ({ title, chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2 bg-white shadow-md w-80">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartWidget;
