import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Auth as AWSAuth } from 'aws-amplify';
import { Button } from 'react-native-elements';

import { GuardedRoute } from '../../components/GuardedRoute';

export class Home extends Component {
  handleSignOut = () => {
    AWSAuth.signOut()
      .then(() => this.props.navigation.navigate('Auth'))
      .catch((err) => console.log(err));
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <GuardedRoute navigate={navigate}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Hello, world!</Text>

          <Button title="Sign Out" onPress={this.handleSignOut} />
        </View>
      </GuardedRoute>
    );
  }
}
