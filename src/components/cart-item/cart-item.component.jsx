import './cart-item.style.scss';

const CartItem =({item : {imageUrl_m,price,name,quantity}})=>(
    <div className='cart-item'>
        <img src={imageUrl_m} alt='item' />
        <div className='item-details'>
<span className='name'>{name}</span>
<span className='price'>{quantity} </span>
        </div>
    </div>
);

export default CartItem;