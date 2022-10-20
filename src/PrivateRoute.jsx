import { Outlet } from 'react-router-dom';
import { PageNoAccess } from './component';

const PrivateRoute = ({ children }) => {
  const auth = true; //

  if (!auth) {
    return <PageNoAccess />;
  }

  return <Outlet />;
};

export default PrivateRoute;
