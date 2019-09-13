import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const STRIPE_PUBLISHABLE_KEY = 'pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW'
const CURRENCY = 'USD';

const successPayment = data => {
  alert('Payment Successful');
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error. Please enter valid payment information.');
  console.log(data);
};

const onToken = (amount, description ) => token => {
  axios.post('/api/billing/onetimecheckout',
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount,
    })
    .then(successPayment)
    .catch(errorPayment);
};

const OneTimeCheckout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE_KEY}
  />
);

export default OneTimeCheckout;