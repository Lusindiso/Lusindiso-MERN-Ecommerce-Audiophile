import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import './Navbar.scss';
import Logo from '../../assets/logo.svg';
import Cart from '../../assets/icon-cart.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar--logo'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>
        <Nav />
        <div className='navbar--right'>
          <div className='cart'>
            <img src={Cart} alt='cart' />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
