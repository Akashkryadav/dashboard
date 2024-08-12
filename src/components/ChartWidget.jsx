// src/components/WidgetChart.jsx

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the components you need
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// eslint-disable-next-line react/prop-types
const ChartWidget = ({ widgets }) => {
  // Prepare data for Chart.js
  const chartData = {
    // eslint-disable-next-line react/prop-types
    labels: widgets.map(widget => widget.title),
    datasets: [
      {
        label: 'Widget Content',
        // eslint-disable-next-line react/prop-types
        data: widgets.map(widget => widget.content),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
         borderColor: 'rgba(75, 192, 192, 1)',
         borderWidth: 1,
        
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
      
    </div>
  );
};

export default ChartWidget;
