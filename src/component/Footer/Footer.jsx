import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='footer-container'>
          <h2>Shop and Learn</h2>
          <div className='footer-content'>
            <>
              <Link to='signup'>Sign up</Link>
              <Link to='signin'>Sign in</Link>
            </>
          </div>
        </div>
      </div>

      <hr className='line' />
      <p className='copyright'>
        Copyright © 2022 HIVE techwear. All rights reserved. Privacy Policy|Term
        of Use Sales Policy|Legal|Site|Map
      </p>
    </footer>
  );
};

export default Footer;
