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

const Header =({currentuser,hidden}) =>
currentuser ?
(
    <div className='header'>
<Link className='logo-container' to='/'>
<Logo  className='logo' />
</Link>
{currentuser.type==='admin'?(<div className='options'>
<Link className='option' to='/addBooks'>
Add Books
</Link>
<Link className='option' to='/viewBooks'>
View Books
</Link>
<Link className='option' to='/viewMembers'>
View Members
</Link>
    <div className='option' onClick={()=> auth.signOut() }>SIGN OUT</div>
<CartIcon />
</div>):(
    <div className='options'>
<Link className='option' to='/shop'>
SHOP
</Link>
<Link className='option' to='/search'>
SEARCH
</Link>
<div className='option' onClick={()=> auth.signOut() }>SIGN OUT</div>
<CartIcon />
</div>
)}
{hidden?null:<CartDropDown />}
    </div>
):(
    <div className='header'>
<Link className='logo-container' to='/'>
<Logo  className='logo' />
</Link>
<div className='options'>
<Link className='option' to='/shop'>
SHOP
</Link>
<Link className='option' to='/search'>
SEARCH
</Link>
{
    <Link className='option' to='/sigin' >SIGN IN</Link>
}
<CartIcon />
</div>
{hidden?null:<CartDropDown />}
    </div>
    
)

const mapStateToProps = createStructuredSelector({
currentuser:selectCurrentUser,
hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);