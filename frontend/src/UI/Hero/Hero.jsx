import { Link } from 'react-router-dom';

import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero--text'>
          <p>NEW PRODUCT</p>
          <h2>XX99 MARK II HEADPHONES</h2>
          <p>
            Experience natural, life like audio and
            exceptional build quality made for the
            passionate music enthusiast.
          </p>

          <Link className='btn-orange'>See product</Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
