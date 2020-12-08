import './App.css';
import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx';
import SigninandSignupPage from './pages/sigin_signup/sigin_signup.component';
import Header from './components/header/haeder.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utilite'


class App extends React.Component{
constructor(){
  super();

  this.state={
    currentuser:null
  }
}

unsubscribeFromAuth=null;

componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot=>{
        this.setState({
          currentuser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        })
      });
    }
    this.setState({currentuser:userAuth});
    
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
    <div >
      <Header currentuser={this.state.currentuser}></Header>
    <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/shop' component={shopPage}/>
     <Route exact path='/sigin' component={SigninandSignupPage}/>

    </Switch>
    </div>
  );
}
}

export default App;