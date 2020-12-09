import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utilite';
import {connect} from 'react-redux';

const Header =({currentuser}) =>(
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
</div>
    </div>
);

const mapStateToProps = state => ({
currentuser : state.user.currentuser
});

export default connect(mapStateToProps)(Header);