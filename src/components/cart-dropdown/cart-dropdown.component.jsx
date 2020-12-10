import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../Custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';

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

const mapsStateToProps= state =>({
    cartItems: selectCartItems(state)
});

export default connect(mapsStateToProps)(CartDropDown);