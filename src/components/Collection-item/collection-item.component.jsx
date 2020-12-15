import './collection-item.style.scss';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import { withRouter } from 'react-router';

const CollectionItem=({item,addItem}) =>{
    const {name,Year_of_publication,imageUrl_m}=item;
    return(
    <div className="collection-item">
        <div
        className='image'
        style={{
            backgroundImage:`url(${imageUrl_m})`
        }}
        />
<div className='collection-footer'>
<span className='name'>{name}</span>
    <span className='price'>{Year_of_publication}</span>
</div>

<CustomButton onClick={()=>addItem(item)} inverted>VIEW BOOK</CustomButton>
<CustomButton onClick={()=>addItem(item)} >Add to BAG</CustomButton>
        </div>
    
)}

const mapDispatchToProps = Dispatch =>({
    addItem: item=>Dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);