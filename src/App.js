import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './views/Landing/LandingPage';
import ChoosePlan from './views/billing/ChoosePlan';
import NewSubCheckout from './views/billing/NewSubCheckout';
import PublicPricePage from './views/billing/PublicPricePage';
import BrowseBooks from './views/browse/BrowseBooks';
import SummaryView from './views/browse/summary/SummaryView';
import NavBar from './navigation/NavDrawer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        {/* Stipe Routes */}
        <Route path="/chooseplan/:id_token" component={ChoosePlan} />
        <Route path="/publicpricing" component={PublicPricePage} />
        <Route
          path="/checkout/newsub/:id_token/:planNickname/:planID"
          component={NewSubCheckout}
        />

        {/* App Routes */}
        <Route exact path="/browse">
          <BrowseBooks />
        </Route>

        <Route path="/summary/:id">
          <SummaryView />
        </Route>

        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
