import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utilite';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header =({currentuser,hidden}) =>(
    <div className='header'>
<Link className='logo-container' to='/'>
<Logo  className='logo' />
</Link>
<div className='options'>
<Link className='option' to='/shop'>
SHOP
</Link>
<Link className='option' to='/shop'>
CONTACT
</Link>
{
    currentuser ?(<div className='option' onClick={()=> auth.signOut() }>SIGN OUT</div>):(<Link className='option' to='/sigin' >SIGN IN</Link>)
}
<CartIcon />
</div>
{hidden?null:<CartDropDown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
currentuser:selectCurrentUser,
hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);