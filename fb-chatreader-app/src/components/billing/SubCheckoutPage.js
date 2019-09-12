import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import NewSubCheckout from './NewSubCheckout';

class SubCheckoutPage extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
              <div className="subcheckoutpage-container">
                <h1>Checkout with React Stripe Elements</h1>
                <Elements>
                  <NewSubCheckout />
                </Elements>
              </div>
            </StripeProvider>
          );
    }
}

export default SubCheckoutPage;