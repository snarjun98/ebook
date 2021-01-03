import './checkout-item.style.scss';
import React from 'react';
import {connect} from 'react-redux';
import {clearItemfromCart,addItem,removeItem} from '../../redux/cart/cart.action';


class  CheckoutItem extends React.Component{
state={
    from:'',
    to:''
}
handleChange = event =>{
    const {name,value} = event.target;
    this.setState({[name]:value});
};

render(){
 const {cartItem,clearItem,RemoveItem,AddItem}=this.props; 
    const {name,imageUrl_m,quantity}=cartItem;
    const {from,to}=this.state
    const d=new Date().toISOString().slice(0, 10); // to get date in yyyy-mm-dd formate
    
    return(
    <div className ='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl_m} alt='item' />
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'onClick={()=>RemoveItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span> 
                <div className='arrow' onClick={()=>AddItem(cartItem)}>&#10095;</div>
                </span>
            <span className='datepickerFrom'>
                <input type='date' name='from' label='From'  onChange={this.handleChange}  value={from}  min={d} required />
            </span>
            <span className='datepickerTo'>
            <input type='date' name='to' label='To' onChange={this.handleChange}  value={to} min={from} max={(parseInt(from.slice(0,4))+1)+from.slice(4,10)}   required/>
            </span>
            <span className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</span>
    </div>
)};

}

const mapDispatchToProps = dispatch =>({
    clearItem:item => dispatch(clearItemfromCart(item)),
    RemoveItem:item => dispatch(removeItem(item)),
    AddItem:item =>dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps)(CheckoutItem);