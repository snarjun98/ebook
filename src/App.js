import './App.css';
import React from 'react';
import { Switch ,Route,Redirect } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx';
import searchPageRoute from "./pages/search/searchRoute.component";
import CheckoutPage from './pages/checkout/checkout.component';
import SigninandSignupPage from './pages/sigin_signup/sigin_signup.component';
import Header from './components/header/haeder.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utilite';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component{


unsubscribeFromAuth=null;

componentDidMount(){
  const {setCurrentUser}=this.props;
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot=>{
        setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
    }
    setCurrentUser(userAuth);
    
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      this.props.currentuser?(
    <div >
       <Header ></Header>
     <Switch>
     <Route path='/shop' component={shopPage}/>
      <Route exact path='/' render={()=>this.props.currentuser.type==='admin' ?(<Redirect to='/shop' />):(<HomePage></HomePage>)}/>
      
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/sigin' render={()=>this.props.currentuser ?(<Redirect to='/' />):(<SigninandSignupPage></SigninandSignupPage>)}/>
      <Route path='/search' component={searchPageRoute}/>
     </Switch>
     </div>
      ):
      (<div >
        <Header ></Header>
      <Switch>
       
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop' component={shopPage}/>
       <Route exact path='/checkout' component={CheckoutPage}/>
       <Route exact path='/sigin' component={SigninandSignupPage}/>
       <Route path='/search' component={searchPageRoute}/>
      </Switch>
      </div>
      )
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentuser :selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);