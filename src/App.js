
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTasksPage from './pages/AllTasksPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/all-tasks" element={<AllTasksPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
