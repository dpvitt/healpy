import { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../../providers/UserContextProvider';

export const GuardedRoute = ({ navigate, children }) => {
  const [user] = useContext(UserContext);
  if (!user) {
    navigate('Auth');
  }
  return user ? children : null;
};

GuardedRoute.propTypes = {
  navigate: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
