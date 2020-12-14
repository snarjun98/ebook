import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe =price*100;
    const publishableKey= 'pk_test_51HyEr6BWvX2IilsNUAz045MzJcZ2OZ0igrz5VqIc9EBx7CWbsNZyj9ba3bPd8ccMmpRVXXT6ALSVeQQ8a4irYjxK00gw9k4G3G';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        currency='INR'
        name='E-book'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='PAY NOW'
        token={onToken}
        stripeKey={publishableKey}
        image='https://svgshare.com/i/CUz.svg'    
        />
    );
};

export default StripeCheckoutButton;