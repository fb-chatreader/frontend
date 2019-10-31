import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';

import { BooksProvider } from './BooksProvider.js';
import { UserProvider } from './UserProvider.js';

function Providers(props) {
  return (
    <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
      <Elements>
        <BooksProvider>
          <UserProvider>{props.children}</UserProvider>
        </BooksProvider>
      </Elements>
    </StripeProvider>
  );
}

export default Providers;
