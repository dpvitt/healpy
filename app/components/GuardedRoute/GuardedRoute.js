import { useContext } from 'react';
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
