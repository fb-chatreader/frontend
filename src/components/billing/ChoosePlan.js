import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Link } from 'react-router-dom';
import SubPlanCard from './SubPlanCard';
import axios from 'axios';
import './css/ChoosePlan.css';
import { StylesContext } from '../../../node_modules/@material-ui/styles/StylesProvider';

class ChoosePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id_token: null
    };
  }

  componentDidMount() {
    const { id_token } = this.props.match.params;
    axios
      .get(`api/billing/productsandplans/${id_token}`)
      .then(response => {
        console.log(response);
        this.setState({ products: response.data, id_token });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { products, id_token } = this.state;
    console.log('MY STATE: ', this.state);
    return (
      <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
        <Elements>
          <div className="chooseplan-page">
            <div className="products-container">
              {products ? (
                products.map((product, index) => (
                  <div className="product-container" key={index}>
                    <h2>Product: {product.name}</h2>
                    <h3>Choose a plan:</h3>
                    <div className="plans-container">
                      {product.plans.map((plan, index) => (
                          <div className="plan-container" key={index}>
                            <SubPlanCard 
                                product={product} 
                                plan={plan} 
                                id_token={id_token}
                            />
                          </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>
                  No products found. Make sure to sign in with a valid user.
                </p>
              )}
            </div>
          </div>
        </Elements>
      </StripeProvider>
    );
  }
}

export default ChoosePlan;
