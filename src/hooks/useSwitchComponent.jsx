import { useLocation } from 'react-router-dom';
import Cart from '../component/Header/Cart';
import Search from '../component/Header/Search';
import Signin from '../component/Header/Signin';
import SignOutLink from '../component/Header/Signout';
import Signup from '../component/Header/Signup';

export const useSwitchComponent = () => {
  const { pathname } = useLocation();

  let component = (
    <>
      <Signin />
      <Signup />
    </>
  );

  switch (pathname) {
    case '/signin':
      component = <Signup />;
      break;
    case '/signup':
      component = <Signin />;
      break;
    case '/home':
      component = (
        <>
          <Search />
          <Cart />
          <SignOutLink />
        </>
      );
      break;

    case '/cart':
      component = (
        <>
          <Cart />
          <SignOutLink />
        </>
      );
      break;
    default:
  }

  return component;
};
