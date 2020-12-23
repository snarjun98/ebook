import './collection-item.style.scss';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import { withRouter } from 'react-router';

const CollectionItem=({item,addItem,history,match}) =>{
    const {name,Year_of_publication,imageUrl_l,linkUrl}=item;
    return(
    <div className="collection-item">
        <div
        className='image'
        style={{
            backgroundImage:`url(${imageUrl_l})`
        }}
        />
<div className='collection-footer'>
<span className='name'>{name}</span>
    <span className='price'>{Year_of_publication}</span>
</div>

<CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)} inverted>VIEW BOOK</CustomButton>
<CustomButton onClick={()=>addItem(item)} >Add to BAG</CustomButton>
        </div>
    
)}

const mapDispatchToProps = Dispatch =>({
    addItem: item=>Dispatch(addItem(item))
});

export default withRouter(connect(null,mapDispatchToProps)(CollectionItem));