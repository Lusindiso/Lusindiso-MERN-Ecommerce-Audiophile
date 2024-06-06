import { Link } from 'react-router-dom';

import './Highlight.scss';
import ZX9 from '../../assets/image-speaker-zx9.png';
import earphonesImg from '../../assets/image-earphones-home.jpg';

const Highlight = () => {
  return (
    <div className='highlight container'>
      <div className='highlight--items'>
        <div className='highlight--items__image'>
          <img src={ZX9} alt='' />
        </div>
        <div className='highlight--items__text'>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are
            phenomenally built to deliver truly remarkable
            sound.
          </p>
          <Link className='btn'>See product</Link>
        </div>
      </div>
      <div className='highlight--items'>
        <h2>ZX7 SPEAKER</h2>
        <Link className='btn'>See product</Link>
      </div>
      <div className='highlight--items'>
        <div className='highlight--items__img'>
          <img src={earphonesImg} alt='earphones' />
        </div>
        <div>
          <h2>YX1 EARPHONES</h2>
          <Link className='btn'>See product</Link>
        </div>
      </div>
    </div>
  );
};
export default Highlight;
