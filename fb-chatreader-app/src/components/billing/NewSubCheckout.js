import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';
import './css/NewSubCheckout.css';

class NewSubCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    let { token } = await this.props.stripe.createToken({ name: "New Subscription" });
    console.log('token:', token);
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "text/plain"},
    //   body: token.id
    // });

    const subData = {
      tokenID: token.id
    };
    console.log('tokenID:', token.id);

    axios.post('/api/billing/checkout/newsub', subData)
      .then(response => {
        console.log(response);
        this.setState({complete: true});
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="new-sub-checkout-form">
        <p>Enter card details to purchase Monthly Subscription:</p>
        <CardElement />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default injectStripe(NewSubCheckout);