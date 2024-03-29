import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './Routes'

import './App.css';

const App: React.FC = () => (
  <Router>
    <div className='App'>
      <Routes />
    </div>
  </Router>
)

export default App;
