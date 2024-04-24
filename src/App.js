import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'; // Importing CSS for styling
import Task1 from './components/Task1';
import Task2 from './components/Task2';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/task1">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className='HomePage'>
      <h1 style={{textAlign: 'center'}}>Welcome to Home Page</h1>
    </div>
  );
};

export default App;
