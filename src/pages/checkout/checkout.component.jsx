import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector';
import CustomButton from '../../components/Custom-button/custom-button.component';
import { selectCurrentUser } from "../../redux/user/user.selector";

const CheckoutPage = ({cartItems,history,currentuser}) =>(
    
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
        { currentuser?
        (<CustomButton onClick={()=>{alert("Collect your Book on reserved Date Thank you");history.push('/')}} >Reserve Book</CustomButton>):
        (<CustomButton onClick={()=>{alert("Plz Sigin To Reserve Books");history.push('/sigin')}} >Reserve Book</CustomButton>)   
        }
        </div>
);

const mapsStateToProps= createStructuredSelector({
    currentuser:selectCurrentUser,
    cartItems: selectCartItems,

});


export default connect(mapsStateToProps)(CheckoutPage);