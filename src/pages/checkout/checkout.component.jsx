import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems,total}) =>(
    <div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Books</span>
        </div>
        <div className='header-block'>
            <span>Name</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>From</span>
        </div>
        <div className='header-block'>
            <span>To</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        {/* <StripeCheckoutButton price={0} />     */}
    </div>
);

const mapsStateToProps= createStructuredSelector({
    cartItems: selectCartItems,
});


export default connect(mapsStateToProps)(CheckoutPage);