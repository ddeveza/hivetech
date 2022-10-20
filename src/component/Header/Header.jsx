import { Link } from 'react-router-dom';
import HiveTechwearLogo from '../../assets/images/HIVETechwear.svg';
import { useSwitchComponent } from '../../hooks/useSwitchComponent';
import './Header.css';
const Header = () => {
  const component = useSwitchComponent();

  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <img clasName='logo' src={HiveTechwearLogo} alt='HIVETechwear' />
        </Link>
      </div>
      <ul className='menu__box'>{component}</ul>
    </div>
  );
};

export default Header;
