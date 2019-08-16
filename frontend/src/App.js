import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Chat from './Components/Chat';
import Recommendation from './Components/RecommendationPage'
import books from './dummyData';
import { LandingPage } from './Components/Landing';
import { Categories } from './Components/Categories';
import { Privacy } from './Components/PrivacyPolicy';
import {TermsOfService} from './Components/TermsOfService'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/messenger' component={Chat}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/recommendation' component={Recommendation} />
        <Route path='/privacy' component={Privacy}/>
        <Route path='/toc' component={TermsOfService} />
      </div>
    </Router>
  );
}

export default App;
