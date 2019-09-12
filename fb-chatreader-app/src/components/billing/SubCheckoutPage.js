import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import NewSubCheckout from './NewSubCheckout';

class SubCheckoutPage extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
                <Elements>
                    <div className="subcheckoutpage-container">
                        <h1>Checkout with React Stripe Elements</h1>
                        
                        <NewSubCheckout />
                        
                    </div>
              </Elements>
            </StripeProvider>
          );
    }
}

export default SubCheckoutPage;