import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/collection.component';
import  viewBookPage  from '../viewBook/viewBookPage.component';

const shopPage =({match})=>(
    
        <div className='shop-page'>
 <Route exact path={`${match.path}`} component={CollectionOverview}/>
 <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}  />
 <Route exact path={`${match.path}/:collectionId/:selectionItemId`} component={viewBookPage}/>
        </div>
    );



export default shopPage;