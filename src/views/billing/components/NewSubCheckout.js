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
    const { token } = await this.props.stripe.createToken({
      name: 'New Subscription'
    });
    const { planID, id_token } = this.props.match.params;

    const subData = {
      source: token.id,
      planID,
      id_token
    };

    axios
      .post('/api/billing/checkout/newsub', subData)
      .then(response => {
        // let qs = '';
        // for (let key in response.data) {
        //   qs += key + '=' + response.data[key];
        // }
        this.setState({ complete: true });
        // setTimeout(() => {
        //   window.location = `https://${process.env.REACT_APP_MESSENGER_URL}?ref=${qs}`;
        // }, 2000);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    const { planNickname } = this.props.match.params;
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className='new-sub-checkout-page'>
        <p>Enter card details to purchase {planNickname} Subscription:</p>
        <div className='cardelement-container'>
          <CardElement />
        </div>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default injectStripe(NewSubCheckout);
