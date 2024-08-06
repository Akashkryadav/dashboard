import  { useEffect, useState } from 'react';
import Widget from './Widget';

const Home = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const fetchWidgets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/widgets');
        const data = await response.json();
        setWidgets(data);
      } catch (error) {
        console.error("Error fetching widget data:", error);
      }
    };

    fetchWidgets();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ml-24 bg-gray-100">
      <div className="flex flex-wrap justify-between ml-24 w-full max-w-4xl">
        {widgets.map((widget, index) => (
          <Widget key={index} title={widget.title} content={widget.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
