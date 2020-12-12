import './collections-overview.style.scss';
import { connect } from 'react-redux';
import { selectShopCollectionsPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import  PreviewCollection  from '../preview-collection/preview-collection.component';

const CollectionOverview =({collections}) =>(
    <div className='collections-overview'>
        {
collections.map(({id,...otherCollections}) => (
    <PreviewCollection key={id} {...otherCollections} />
))
            }

    </div>
);
const mapStateToProps=createStructuredSelector ({
    collections: selectShopCollectionsPreview
    });

export default connect(mapStateToProps)(CollectionOverview);