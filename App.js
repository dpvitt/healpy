import React from 'react';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { UserContextProvider } from './app/providers/UserContextProvider';
import { Home } from './app/pages/Home';
import { Auth } from './app/pages/Auth';

Amplify.configure(awsExports);

const MainNavigator = createAppContainer(
  createStackNavigator({
    Auth: { screen: Auth },
    Home: { screen: Home },
  }),
);

const Main = () => (
  <UserContextProvider>
    <MainNavigator />
  </UserContextProvider>
);

export default Main;
