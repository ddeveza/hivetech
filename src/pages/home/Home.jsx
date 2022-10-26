import Categories from './components/Categories';
import Products from './components/Products';
import './Home.css';

const Home = () => {
  return (
    <section className='main-wrapper'>
      <div className='homepage'>
        <div className='homepage-container'>
          {/* 
              Categories
              Products
           */}
          <Categories />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Home;
