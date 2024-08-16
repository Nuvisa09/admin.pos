import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import MainContent from './components/MainContent.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', width: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Navbar />
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
