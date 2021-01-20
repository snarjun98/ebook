import React from 'react';
import { Route } from 'react-router-dom';
import { firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utilite';
import { connect  } from 'react-redux';
import {updateCollections} from "../../redux/shop/shop.action";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SearchPage from "./search.component";
import  viewBookPage  from '../viewBook/viewBookPage.component';

const SearchPageWithSpinner=WithSpinner(SearchPage);
const ViewBookPageWithSpinner=WithSpinner(viewBookPage);

class  searchPageRoute extends React.Component {
 state={
     loading: true
 };
 
 
    unsubscribeFromSnapshot = null;



    componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');
  
      collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      });
    }
  

    render(){
        const {match} = this.props;
        const {loading}=this.state;
    return (
        <div className='shop-page'>
         <Route
          exact
          path={`${match.path}`}
          render={props => (
            <SearchPageWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
        exact
          path={`${match.path}/:collectionId/:selectionItemId`}
          render={props => (
            <ViewBookPageWithSpinner isLoading={loading} {...props} />
          )}
        />

               </div>
    );
    }
    
}     

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});


export default connect(null,mapDispatchToProps)(searchPageRoute);