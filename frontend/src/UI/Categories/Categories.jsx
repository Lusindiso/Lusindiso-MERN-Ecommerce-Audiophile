import { Link } from 'react-router-dom';
import './Categories.scss';
import Arrow from '../../assets/icon-arrow-right.svg';
import Headphones from '../../assets/image-headphones.png';
import Speakers from '../../assets/image-speakers.png';
import Earphones from '../../assets/image-earphones.png';

const Categories = () => {
  return (
    <section className='categories container'>
      <div className='category'>
        <div className='category--image'>
          <img src={Headphones} alt='' />
        </div>
        <div className='category--text'>
          <h3>Headphones</h3>
          <Link to='/headphones'>
            <p>
              <span>Shop</span>
              <img src={Arrow} alt='' />
            </p>
          </Link>
        </div>
      </div>
      <div className='category'>
        <div className='category--image'>
          <img src={Speakers} alt='' />
        </div>
        <div className='category--text'>
          <h3>Speakers</h3>
          <Link to='/speakers'>
            <p>
              <span>Shop</span>
              <img src={Arrow} alt='' />
            </p>
          </Link>
        </div>
      </div>
      <div className='category'>
        <div className='category--image'>
          <img src={Earphones} alt='' />
        </div>
        <div className='category--text'>
          <h3>Earphones</h3>
          <Link to='/earphones'>
            <p>
              <span>Shop</span>
              <img src={Arrow} alt='' />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Categories;
