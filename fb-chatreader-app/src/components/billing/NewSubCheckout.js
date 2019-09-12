import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

class NewSubCheckout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    let { token } = await this.props.stripe.createToken({ name: "New Subscription" });

    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "text/plain"},
    //   body: token.id
    // });
    const subData = {
      source: token.id
    };
    
    axios.post('/api/billing/checkout/newsub', subData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  render() {
    return (
      <div className="new-sub-checkout-form">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default injectStripe(NewSubCheckout);