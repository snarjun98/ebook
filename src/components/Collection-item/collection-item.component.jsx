import './collection-item.style.scss';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

const CollectionItem=({item,addItem}) =>{
    const {name,price,imageUrl}=item;
    return(
    <div className="collection-item">
        <div
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
<div className='collection-footer'>
<span className='name'>{name}</span>
    <span className='price'>{price}</span>
</div>
<CustomButton onClick={()=>addItem(item)} inverted>Add to CART</CustomButton>
        </div>
    
)}

const mapDispatchToProps = Dispatch =>({
    addItem: item=>Dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);