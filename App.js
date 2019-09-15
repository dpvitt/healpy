import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from './app/pages/Home';
import { Auth } from './app/pages/Auth';

Amplify.configure(awsExports);

const MainNavigator = createStackNavigator({
  Auth: { screen: Auth },
  Home: { screen: Home },
});

export default createAppContainer(MainNavigator);
