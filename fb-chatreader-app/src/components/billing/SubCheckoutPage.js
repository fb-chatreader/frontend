import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import NewSubCheckout from './NewSubCheckout';

class SubCheckoutPage extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
              <div className="example">
                <h1>React Stripe Elements Example</h1>
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          );
    }
}
