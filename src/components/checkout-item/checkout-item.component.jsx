import './checkout-item.style.scss';
import {connect} from 'react-redux';
import {clearItemfromCart,addItem,removeItem} from '../../redux/cart/cart.action';


const CheckoutItem = ({cartItem,clearItem,RemoveItem,AddItem}) =>{
    const {name,imageUrl_m,quantity}=cartItem;
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
            
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch =>({
    clearItem:item => dispatch(clearItemfromCart(item)),
    RemoveItem:item => dispatch(removeItem(item)),
    AddItem:item =>dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps)(CheckoutItem);