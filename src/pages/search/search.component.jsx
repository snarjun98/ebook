import { Component } from'react';
import {Searchbox} from '../../components/search/search.component';
import { connect  } from 'react-redux';
import CollectionItem  from "../../components/Collection-item/collection-item.component";
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsPreview } from '../../redux/shop/shop.selector';

class SearchPage extends Component{
state={
  searchfield:""
};


handleChange=(e)=>{this.setState({searchfield:e.target.value});};

render(){
  const {collections}=this.props;
const {searchfield} =this.state;
const filtereBooks =(collections[0].items).filter(items =>(items.name).toLowerCase().includes(searchfield.toLowerCase()));
  return (
   
    <div className="collection-page">
      <h1 className='title'>Search Books</h1>
    <Searchbox
    placeholder='search Books'
    handleChange={e => this.setState({searchfield:e.target.value})}
    />
    <div className="items">
    {
        filtereBooks.map(items=>(
        <CollectionItem key={items.id} item={items} ></CollectionItem>
        ))
    }
    </div>
    </div>
  );
}
}
const mapStateToProps=createStructuredSelector ({
  collections:selectShopCollectionsPreview

  });

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//     dispatch(updateCollections(collectionsMap))
// });

export default connect(mapStateToProps)(SearchPage);