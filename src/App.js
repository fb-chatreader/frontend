import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';

import NavBar from './components/navigation/NavBar';
import LandingPage from './components/Landing/LandingPage';
import ChoosePlan from './components/billing/ChoosePlan';
import NewSubCheckout from './components/billing/NewSubCheckout';
import BrowseBooks from './components/BrowseBooks/BrowseBooks';
import BookPage from './components/BrowseBooks/BookPage';

import { BookContext } from 'Providers/BooksProvider.js';
import axios from 'axios';

import styles from './scss/components/App.module.scss';

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

              <Route exact path="/browse">
                <BrowseBooks />
              </Route>

              <Route path="/summary/:id" component={BookPage} />
              {/* <BookPage />
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
