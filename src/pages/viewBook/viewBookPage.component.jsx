import './viewBookPage.style.scss';
import { connect } from 'react-redux';
import { selectCollectionitem } from '../../redux/shop/shop.selector';
import CustomButton from '../../components/Custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.action';


const viewBookPage = ({collections,addItem}) => {
    const {id,name,Author,Year_of_publication,Publisher,imageUrl_l,descreption}=collections;
   return(
   <div className='viewBookPage'>
       <div className='bookPicCol'>
            <div className='bookPicContainer'>
                <img className='bookImage' src={imageUrl_l} alt='BookImage'/>
            </div>
        <hr></hr>
            <CustomButton onClick={()=>addItem(collections)} >Add to BAG</CustomButton>
        
        </div>
        <div className='bookContentCol'>

            <h4>ISBN : {id}</h4>
            <h4>NAME : {name}</h4>
            <h4>AUTHOR : {Author}</h4>
            <h4>YEAR OF PUBLICATION : {Year_of_publication}</h4>
            <h4>PUBLISHER:{Publisher}</h4>
            <p><b>Desception : </b>{descreption}</p>
        </div>
   </div>
   );
};

const mapStateToProps = (state,ownProps) =>({
    collections:selectCollectionitem(ownProps.match.params.collectionId,ownProps.match.params.selectionItemId)(state)
});
const mapDispatchToProps = Dispatch =>({
    addItem: collections=>Dispatch(addItem(collections))
});


export default connect(mapStateToProps,mapDispatchToProps)(viewBookPage);