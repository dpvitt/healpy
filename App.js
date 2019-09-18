import React from 'react';
import Amplify from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import { Auth as AWSAuth } from 'aws-amplify';
import API from '@aws-amplify/api';
import { createAppContainer } from 'react-navigation';
import awsExports from './aws-exports';
import { createStackNavigator } from 'react-navigation-stack';
import { UserContextProvider } from './app/providers/UserContextProvider';
import { Home } from './app/pages/Home';
import { Auth } from './app/pages/Auth';

Amplify.configure(awsExports);
API.configure(awsExports);

const client = new AWSAppSyncClient({
  url: awsExports.aws_appsync_graphqlEndpoint,
  region: awsExports.aws_appsync_region,
  auth: {
    type: awsExports.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await AWSAuth.currentSession()).getIdToken().getJwtToken(),
  },
  options: {
    fetchPolicy: 'cache-and-network',
  },
});

const MainNavigator = createAppContainer(
  createStackNavigator({
    Auth: { screen: Auth },
    Home: { screen: Home },
  }),
);

const Main = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <UserContextProvider>
        <MainNavigator />
      </UserContextProvider>
    </Rehydrated>
  </ApolloProvider>
);

export default Main;
