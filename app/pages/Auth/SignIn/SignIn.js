import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'react-native-elements';

export const SignIn = ({ setEmail, setPassword, handleSignIn }) => (
  <Fragment>
    <Input
      label="Email"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={(value) => setEmail(value)}
      placeholder="my@email.com"
    />
    <Input
      label="Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={(value) => setPassword(value)}
      placeholder="p@ssw0rd123"
      secureTextEntry
    />
    <Button title="Submit" onPress={handleSignIn} />
  </Fragment>
);

SignIn.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};
