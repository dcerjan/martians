import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Login } from './page/Login/Login';

import './App.css';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Login} />
    </div>
  </Router>
)

export default App;
