
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// eslint-disable-next-line react/prop-types
const WidgetPieChart = ({ widgets }) => {
  const chartData = {
    // eslint-disable-next-line react/prop-types
    labels: widgets.map(widget => widget.title),
    datasets: [
      {
        label: 'Widget Content',
        // eslint-disable-next-line react/prop-types
        data: widgets.map(widget => widget.content),
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default WidgetPieChart;
