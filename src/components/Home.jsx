
import { useEffect, useState } from 'react';
import Widget from './Widget';
import ChartWidget from './ChartWidget';


const Home = () => {
  const [widgets, setWidgets] = useState([]);
  const [newWidget, setNewWidget] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch widgets from the server
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

  // Handle form submission for adding or updating widgets
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isEditing) {
        response = await fetch(`http://localhost:5000/api/widgets/${widgets[editIndex]._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWidget),
        });
      } else {
        response = await fetch('http://localhost:5000/api/widgets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWidget),
        });
      }

      const data = await response.json();
      if (isEditing) {
        setWidgets(widgets.map((widget, index) => (index === editIndex ? data : widget)));
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setWidgets([...widgets, data]);
      }
      setNewWidget({ title: '', content: '' });
    } catch (error) {
      console.error("Error saving widget data:", error);
    }
  };

  // Handle editing a widget
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setNewWidget(widgets[index]);
  };

  return (
    <div className="flex flex-col min-h-screen ml-24 bg-gray-100">
      <div className="flex flex-wrap justify-between ml-24 w-full max-w-4x ">
        {widgets.map((widget, index) => (
          <div key={index}>
            <Widget title={widget.title} content={widget.content} />
            <button onClick={() => handleEdit(index)}className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>Edit</button>
          </div>
        ))}
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input className='m-40  '
          type="text"
          value={newWidget.title}
          onChange={(e) => setNewWidget({ ...newWidget, title: e.target.value })}
          placeholder="Title"
          required
          
        />
        <input
          type="number"
          value={newWidget.content}
          onChange={(e) => setNewWidget({ ...newWidget, content: e.target.value })}
          placeholder="Content"
          required
        />
        <button type="submit"className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>{isEditing ? 'Update' : 'Add'} Widget</button>
      </form>
    </div>
    <div className="m-40">
        {/* Include the chart component */}
        <ChartWidget widgets={widgets} />
        
      </div>
    </div>
  );
};

export default Home;
