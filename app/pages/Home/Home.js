import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Logout } from '../../components/Logout';
import { GuardedRoute } from '../../components/GuardedRoute';
import { UserQuery } from '../../queries/User';
import { StartChat } from './StartChat';
import { CollectName } from './CollectName';

export const HomeContents = ({ user, navigation }) => (
  <Fragment>
    {user ? <StartChat name={user.name} /> : <CollectName />}
    <Logout navigate={navigation.navigate} />
  </Fragment>
);

HomeContents.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export const Home = ({ navigation, ...otherProps }) => (
  <GuardedRoute navigate={navigation.navigate}>
    <UserQuery>
      {({ user }) => (
        <HomeContents {...otherProps} navigation={navigation} user={user} />
      )}
    </UserQuery>
  </GuardedRoute>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
