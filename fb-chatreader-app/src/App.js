import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/navigation/NavBar';
import LandingPage from './components/LandingPage';
// import CheckoutPage from './components/billing/CheckoutPage';
import SubCheckoutPage from './components/billing/SubCheckoutPage';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/checkout' component={SubCheckoutPage} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
