import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import Providers from 'Providers/';

import 'interceptors/';
import './index.css';

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);
