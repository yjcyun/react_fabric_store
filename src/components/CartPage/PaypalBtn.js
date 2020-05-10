import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {
  render() {
    const onSuccess = (payment) => {
      console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      this.props.history.push('/');
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
      console.log("Error!", err);
    }

    let env = 'sandbox'; 
    let currency = 'USD'; 
    //let total = 1; 

    const client = {
      sandbox: process.env.REACT_APP_SANDBOX_ID,
      production: 'YOUR-PRODUCTION-APP-ID',
    }
  
    return (
      <PaypalExpressBtn 
      env={env} 
      client={client} 
      currency={currency} 
      total={this.props.cartTotal} 
      onError={onError} 
      onSuccess={onSuccess} 
      onCancel={onCancel} />
    );
  }
}