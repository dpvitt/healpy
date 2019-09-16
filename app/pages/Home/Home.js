import React from 'react';
import PropTypes from 'prop-types';
import { GuardedRoute } from '../../components/GuardedRoute';
import { StartChat } from './StartChat';
import { CollectName } from './CollectName';

export const Home = ({ name, navigation: { navigate } }) => (
  <GuardedRoute navigate={navigate}>
    {name ? <StartChat /> : <CollectName />}
  </GuardedRoute>
);

Home.propTypes = {
  name: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
