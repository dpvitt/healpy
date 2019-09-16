import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Auth as AWSAuth } from 'aws-amplify';
import { UserContext } from '../../providers/UserContextProvider';

export const GuardedRoute = ({ navigate, children }) => {
  const [user, setUser] = useContext(UserContext);
  if (!user) {
    AWSAuth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => navigate('Auth'));
  }
  return user ? children : null;
};

GuardedRoute.propTypes = {
  navigate: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
