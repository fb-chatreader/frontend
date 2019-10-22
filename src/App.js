import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';

import NavBar from './components/navigation/NavBar';
import LandingPage from './components/LandingPage';
import ChoosePlan from './components/billing/ChoosePlan';
import NewSubCheckout from './components/billing/NewSubCheckout';
import BrowseBooks from './components/BrowseBooks/BrowseBooks';
import BookPage from './components/BrowseBooks/BookPage';

import './App.css';

function App() {
  return (
    <Router>
      <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
        <Elements>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/chooseplan/:id_token" component={ChoosePlan} />

              <Route exact path="/browse">
                <BrowseBooks />
              </Route>
              <Route path="/summary/:id">
                <BookPage />
              </Route>

              <Route exact path="/checkout/newsub/:id_token/:planNickname/:planID" component={NewSubCheckout} />

              <Route exact path="/">
                <LandingPage />
              </Route>
            </Switch>
          </div>
        </Elements>
      </StripeProvider>
    </Router>
  );
}

export default App;
