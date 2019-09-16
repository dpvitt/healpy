import React from 'react';
import { GuardedRoute } from '../../components/GuardedRoute';
import { StartChat } from './StartChat';
import { CollectName } from './CollectName';

export const Home = ({ name, navigation: { navigate } }) => (
  <GuardedRoute navigate={navigate}>
    {name ? <StartChat /> : <CollectName />}
  </GuardedRoute>
);
