import { useLocation } from 'react-router-dom';
import Signin from '../component/Header/Signin';
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
    default:
  }

  return component;
};
