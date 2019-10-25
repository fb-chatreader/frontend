import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import SubPlansGrid from './SubPlansGrid';
import axios from 'axios';
import styles from './styles/ChoosePlan.module.scss';

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
    return (
      <StripeProvider apiKey="pk_test_szSIHpMw6NMiX62i8aL5W82t00VdTotHmW">
        <Elements>
          <div className={styles.choosePlan}>
            <div className={styles.productsContainer}>
              {products ? (
                products.map((product, index) => {
                  console.log('PRODUCT: ', product);
                  return (
                    <div className={styles.productContainer} key={index}>
                      <h2>{product.name}</h2>
                      <h3>Choose a payment plan:</h3>
                      <div className={styles.plansContainer}>
                        <SubPlansGrid product={product} id_token={id_token} />
                      </div>
                    </div>
                  );
                })
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
