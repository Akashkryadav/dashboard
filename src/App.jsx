

import './App.css'

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ReportSheet from './components/ReportSheet';
import { useState,useEffect } from 'react';

  const App = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    const saveData = (data) => {
      fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then(savedData => {
          console.log('Data saved:', savedData);
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    };
  return (
    <div>
      
      <Sidebar />
      <Dashboard/>
      <ReportSheet data={data} onSave={saveData} />

     
    </div>
      
    
  )
}

export default App



