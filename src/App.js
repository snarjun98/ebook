import './App.css';
import React from 'react';
import { Switch ,Route,Redirect } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx';
import SigninandSignupPage from './pages/sigin_signup/sigin_signup.component';
import Header from './components/header/haeder.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utilite';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'

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
    <div >
      <Header ></Header>
    <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/shop' component={shopPage}/>
     <Route exact path='/sigin' render={()=>this.props.currentuser ?(<Redirect to='/' />):(<SigninandSignupPage></SigninandSignupPage>)}/>

    </Switch>
    </div>
  );
}
}

const mapStateToProps = ({user})=>({
  currentuser :user.currentuser
});

const mapDispatchToProps = dispatch =>({
setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);