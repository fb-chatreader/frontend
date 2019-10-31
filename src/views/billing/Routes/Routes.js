import React from 'react';
import { Route } from 'react-router-dom';

import ChoosePlan from '../components/ChoosePlan';
import NewSubCheckout from '../components/NewSubCheckout';
import PublicPricePage from '../components/PublicPricePage';

function Routes() {
  return (
    <>
      <Route path="/chooseplan/:id_token" component={ChoosePlan} />
      <Route path="/publicpricing" component={PublicPricePage} />
      <Route
        path="/checkout/newsub/:id_token/:planNickname/:planID"
        component={NewSubCheckout}
      />
    </>
  );
}

export default Routes;
