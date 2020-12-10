import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../Custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem} />              
                     ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
);

const mapsStateToProps= ({cart :{cartItems}}) =>({
    cartItems
});

export default connect(mapsStateToProps)(CartDropDown);