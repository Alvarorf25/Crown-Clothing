import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;                         //it is because stripe needs the price in cents USD
    const publishableKey = 'pk_test_51IBR4VAaf5Erzdj9LZ8eiajYMJgiZwm83LPnDDQVkXAPMqUPY7vw4NAoZ4I1iYgadxk20tb8nV1dC5ehyaXRohwI00EezwrnXJ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} 
        />
    );
};

export default StripeCheckoutButton;