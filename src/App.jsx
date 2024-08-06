

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ReportSheet from './components/ReportSheet';

import { useState,useEffect } from 'react';

import Forum from './components/Forum';
import Home from './components/Home';

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
    // <div>
      
    //   <Sidebar />
    //   <Dashboard/>
    //   <ReportSheet data={data} onSave={saveData} />

     
    // </div>
    <Router>
    <div className="flex ">
        <Sidebar />
        <div className="flex-grow  ">
            <Routes>
                <Route path="/forum" element={<Forum />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/report" element={<ReportSheet data={data} onSave={saveData}  />} />
                <Route path='/'element={<Dashboard/>}/>
            </Routes>
        </div>
    </div>
</Router>

    
  )
}

export default App



