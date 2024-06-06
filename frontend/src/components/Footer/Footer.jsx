import { Link } from 'react-router-dom';
import './Footer.scss';
import Nav from '../Nav/Nav';
import Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer--header'>
          <div className='footer--header__logo'>
            <Link to='/'>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div className='footer--header__navbar'>
            <Nav />
          </div>
        </div>

        <div className='footer--bottom'>
          <p className='footer-about'>
            Audiophile is an all in one stop to fulfill your
            audio needs. We're a small team of music lovers
            and sound specialists who are devoted to helping
            you get the most out of personal audio. Come and
            visit our demo facility - we’re open 7 days a
            week.
          </p>
          <div className='social'>social</div>
        </div>
        <p className='copy-right'>
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
