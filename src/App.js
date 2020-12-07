import './App.css';
import { Switch ,Route } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div >
    <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/shop' component={shopPage}/>

    </Switch>
    </div>
  );
}

export default App;
