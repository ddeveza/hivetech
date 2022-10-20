import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <li>
      <Link className='menu__item' to='/signin'>
        Sign In
      </Link>
    </li>
  );
};

export default Signin;
