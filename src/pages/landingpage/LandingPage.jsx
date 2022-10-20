import { Link } from 'react-router-dom';
import BannerImage from '../../assets/images/Banner.png';
import OfferImage001 from '../../assets/images/offer001.png';
import OfferImage002 from '../../assets/images/offer002.png';
import OfferImage003 from '../../assets/images/offer003.png';
import OfferImage004 from '../../assets/images/offer004.png';
import Categories from './component/Categories';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className='main-wrapper'>
      <div className='banner'>
        <img className='banner-image' src={BannerImage} alt='' />
        <div className='banner-text'>
          <p>Clothing Divine Getting</p>
          <p>Everyone's Favorite</p>
          <p>This Season's most - loved Styles</p>
        </div>

        <div className='product-brand'>
          <p>Get Up to 50% off</p>
          <p>On all products and brands </p>
          <div>
            <Link to={'/signin'}>Shop Women's</Link>
            <Link to={'/signin'}>Shop Men's</Link>
          </div>
        </div>
        <div className='landing-container'>
          <div className='content-container'>
            <p className='category-title'>Categories</p>
            <Categories />
          </div>

          <div className='content-container'>
            <p className='category-title'>Offers</p>
            <div className='offer'>
              <div className='offer-items'>
                <img className='offer-image' src={OfferImage001} alt='' />
                <div className='offer-text'>
                  <p>UP TO 25% OFF</p>
                  <p>On all the T-Shirt brands</p>
                </div>
                <Link to='/signin'>
                  <button className='offer-btn offer-001'>GET NOW</button>
                </Link>
              </div>
              <div className='offer-items'>
                <img className='offer-image' src={OfferImage002} alt='' />
                <div className='offer-text'>
                  <p>UP TO 35% OFF</p>
                  <p>On all the Hat brands</p>
                </div>
                <Link to='/signin'>
                  <button className='offer-btn offer-001'>GET NOW</button>
                </Link>
              </div>
              <div className='offer-items'>
                <img className='offer-image' src={OfferImage003} alt='' />
                <div className='offer-text'>
                  <p>UP TO 50% OFF</p>
                  <p>On all the Bottom brands</p>
                </div>
                <Link to='/signin'>
                  <button className='offer-btn offer-001'>GET NOW</button>
                </Link>
              </div>
              <div className='offer-items'>
                <img className='offer-image' src={OfferImage004} alt='' />
                <div className='offer-text'>
                  <p>UP TO 75% OFF</p>
                  <p>On all the Shirt brands</p>
                </div>
                <Link to='/signin'>
                  <button className='offer-btn offer-001'>GET NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
