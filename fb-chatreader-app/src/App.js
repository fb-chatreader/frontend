import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/navigation/NavBar';
import LandingPage from './components/LandingPage';
import ChoosePlan from './components/billing/ChoosePlan';
import NewSubCheckout from './components/billing/NewSubCheckout';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/chooseplan' component={ChoosePlan} />
          <Route exact path='/newsubcheckout' component={NewSubCheckout} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
