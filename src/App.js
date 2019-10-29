import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';

// import NavBar from './navigation/NavBar';
import LandingPage from './views/Landing/LandingPage';
import ChoosePlan from './views/billing/ChoosePlan';
import NewSubCheckout from './views/billing/NewSubCheckout';
import PublicPricePage from './views/billing/PublicPricePage';
import BrowseBooks from './views/browse/BrowseBooks';
import SummaryView from './views/browse/summary/SummaryView';
import NavBar from './navigation/NavDrawer';

import { BookContext } from 'Providers/BooksProvider.js';
import axios from 'axios';

import styles from './App.module.scss';

function App() {
  const [ state, dispatch ] = useContext(BookContext);

  useEffect(
    () => {
      if (!state.books || !state.books.length) {
        axios.get('/api/books/').then((res) => {
          const categories = Array.from(new Set(res.data.map(({ category }) => category))).sort();
          dispatch({ type: 'POPULATE_BOOKS', payload: res.data });
          dispatch({
            type: 'POPULATE_CATEGORIES',
            payload: categories
          });
        });
      }
    },
    [ state.books, state.categories, dispatch ]
  );

  return (
    <Router>
      <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
        <Elements>
          <div className={styles.App}>
            <NavBar />
            <Switch>
              <Route exact path="/chooseplan/:id_token" component={ChoosePlan} />

              <Route exact path="/publicpricing" component={PublicPricePage} />

              <Route exact path="/browse">
                <BrowseBooks />
              </Route>

              <Route path="/summary/:id" component={SummaryView} />
              {/* <SummaryView />
              </Route> */}

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
