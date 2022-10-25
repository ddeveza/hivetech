import { PageNoAccess } from './component';
import PublicLayout from './layouts/PublicLayout';

const PrivateRoute = ({ children }) => {
  const { token } = JSON.parse(localStorage.getItem('users')) ?? { token: '' };

  if (!token) {
    return <PageNoAccess />;
  }

  return <PublicLayout />;
};

export default PrivateRoute;
