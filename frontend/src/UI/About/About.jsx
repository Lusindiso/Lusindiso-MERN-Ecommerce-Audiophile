import './About.scss';
import AboutImage from '../../assets/image-best-gear.jpg';

const About = () => {
  return (
    <section className='about container'>
      <div className='about--text'>
        <h2 className='about--text__h'>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h2>
        <p className='about--text__p'>
          Located at the heart of New York City, Audiophile
          is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We
          have a large showroom and luxury demonstration
          rooms available for you to browse and experience a
          wide range of our products. Stop by our store to
          meet some of the fantastic people who make
          Audiophile the best place to buy your portable
          audio equipment.
        </p>
      </div>
      <div className='about--image'>
        <img src={AboutImage} alt='' />
      </div>
    </section>
  );
};
export default About;
