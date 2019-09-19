import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/ChoosePlan.css';

class ChoosePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    };

    componentDidMount() {
        const facebook_id = 'def456';
        axios.get(`api/billing/productsandplans/${facebook_id}`)
            .then(response => {
                console.log(response);
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { products } = this.state;
        return (
            <StripeProvider apiKey='pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW'>
                <Elements>
                <div className='chooseplan-page'>
                    <div className='products-container'>
                            {products.map((product, index) => (
                                <div className='product-container' key ={index}>
                                    <h2>Product: {product.name}</h2>
                                    <h3>Choose a plan:</h3>
                                    <div className='plans-container'>
                                        {product.plans.map((plan, index) => (
                                            <div className='plan-container' key={index}>
                                            <form action='/signUp' method='POST'>
                                                <input hidden readOnly value={ product.name} name='productName'/>
                                                <input hidden readOnly value={ plan.id} name='planId'/>
                                                <input hidden readOnly value={ plan.nickname} name='planName'/>
                                                <input hidden readOnly value={ plan.amount} name='planAmount'/>
                                                <input hidden readOnly value={ plan.interval} name='planInterval'/>
                                                <input hidden readOnly value={ plan.interval_count} name='planIntervalCount'/>
                                                <h3>Plan: {plan.nickname} {plan.amount}/ 
                                                    {plan.interval_count > 1 ? (
                                                        <span>{plan.interval_count} {plan.interval}s</span>
                                                    ) : (
                                                        <span>{plan.interval}</span>
                                                    )}     
                                                </h3>
                                                {plan.user_is_subscribed ? (
                                                    <p>You are subscribed to this plan</p>
                                                ) : (
                                                    <Link exact to={`/checkout/newsub/${plan.nickname}/${plan.id}`}>
                                                    <button>
                                                        Select Plan
                                                    </button>
                                                    </Link>
                                                )}
                                                
                                            </form>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            ))}
                    
                    </div>
                </div>
              </Elements>
            </StripeProvider>
          );
    }
}

export default ChoosePlan;