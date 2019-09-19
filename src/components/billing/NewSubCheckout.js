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
    const { token } = await this.props.stripe.createToken({ name: "New Subscription" });
    console.log('token:', token);
    console.log('tokenID:', token.id);
    const { planID } = this.props.match.params;
    console.log('planID: ', planID);

    const subData = {
      source: token.id,
      planID,
      facebook_id: 'abc123'   // hard-coded to match test user in database
    };

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
    const { planNickname } = this.props.match.params;
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="new-sub-checkout-page">
        <p>Enter card details to purchase {planNickname} Subscription:</p>
        <div className="cardelement-container">
          <CardElement />
        </div>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default injectStripe(NewSubCheckout);