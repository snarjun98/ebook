import React from 'react';
import ShopData from './shop.data.js'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class shopPage extends React.Component{
constructor(props){
    super();

    this.state ={
        collections:ShopData
    }
}

render(){
    const {collections}=this.state;
    return(
        <div className='shop-page'>
            {
collections.map(({id,...otherCollections}) => (
    <PreviewCollection key={id} {...otherCollections} />
))
            }
        
        </div>
    )
}

}

export default shopPage;