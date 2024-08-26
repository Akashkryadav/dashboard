import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ReportSheet from "./components/ReportSheet";

import Forum from "./components/Forum";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="flex" style={{position:'relative'}}>
        <div style={{position:'fixed'}}>
          <Sidebar />
        </div>
        <div className="flex-grow " style={{position:'absolute',left:'160px'}}>
          <Routes>
            <Route path="/forum" element={<Forum />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/reportsheet" element={<ReportSheet />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
