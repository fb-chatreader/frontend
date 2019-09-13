import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import NewSubCheckout from './NewSubCheckout';
import axios from 'axios';

class SubCheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    };

    componentDidMount() {
        axios.get('/api/billing/productsandplans')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    render() {
        return (
            <StripeProvider apiKey='pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW'>
                <Elements>
                <div class='customer-view'>
                    <div class='customer-view-products'>
                    <h2>{product.name}</h2>
                    <div class='customer-view-plans'>
                        <div class='customer-view-plan'>
                        <form action='/signUp' method='POST'>
                            <input hidden value={ product.name} name='productName'/>
                            <input hidden value={ plan.id} name='planId'/>
                            <input hidden value={ plan.nickname} name='planName'/>
                            <input hidden value={ plan.amount} name='planAmount'/>
                            <input hidden value={ plan.interval} name='planInterval'/>
                            <input hidden value={ plan.interval_count} name='planIntervalCount'/>
                            <h3>{plan.nickname} {plan.amount}  
                                {plan.interval_count > 1 ? (
                                    <span>{plan.interval_count} {plan.interval}s</span>
                                ) : (
                                    <span>{plan.interval}</span>
                                )}     
                            </h3>
                            <input class='btn' type='submit' value='Sign Up'/>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
              </Elements>
            </StripeProvider>
          );
    }
}

export default SubCheckoutPage;