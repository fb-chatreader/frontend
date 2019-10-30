import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import Providers from 'Providers/';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'interceptors/';
import './index.scss';

ReactDOM.render(
  <Providers>
    <Router>
      <App />
    </Router>
  </Providers>,
  document.getElementById('root')
);
