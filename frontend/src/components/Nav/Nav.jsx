import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/headphones'>Headphones</NavLink>
      </li>
      <li>
        <NavLink to='/speakers'>Speakers</NavLink>
      </li>
      <li>
        <NavLink to='/earphones'>Earphones</NavLink>
      </li>
    </ul>
  );
};
export default Nav;
