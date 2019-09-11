import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import OneTimeCheckout from './OneTimeCheckout';

import {
    Grid,
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@material-ui/core';



// import axios from 'axios';

const styles = theme => ({
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing.unit * 2,
      },
    },
  })

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // We may want to store facebook page id here
        };
    };

    render() {
        const { rental } = this.state;
        return (
            <div className="checkout-page">
                <div className="checkout-panel">
                    <Card className="card" align="left">
                        <CardHeader
                            title='Review details for this checkout and provide payment information to confirm.'
                            titleTypographyProps={{ align: 'left', variant: 'h5' }}
                            subheaderTypographyProps={{ align: 'center' }}
                        />
                        <CardContent>
                            <div className="checkout-info-container">
                                <p>Checkout details go here</p>
                            </div>
                            <OneTimeCheckout 
                                name={'ChatReader Single Page Checkout'}
                                description={'ChatReader Single Page Checkout'}
                                amount={20000}
                            /> 
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    };
};

export default withRouter(withStyles(styles)(CheckoutPage));