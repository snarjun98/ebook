import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems,total}) =>(
    <div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Books</span>
        </div>
        <div className='header-block'>
            <span>Descrption</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>TOTAL: ${total}</div>
        <StripeCheckoutButton price={total} />    
    </div>
);

const mapsStateToProps= createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


export default connect(mapsStateToProps)(CheckoutPage);