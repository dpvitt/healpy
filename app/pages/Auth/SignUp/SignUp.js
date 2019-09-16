import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'react-native-elements';

export const SignUp = ({
  setEmail,
  setPassword,
  setConfirmPassword,
  handleSignUp,
}) => (
  <Fragment>
    <Input
      label="Email"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      placeholder="my@email.com"
      onChangeText={(value) => setEmail(value)}
    />
    <Input
      label="Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      placeholder="p@ssw0rd123"
      secureTextEntry
      onChangeText={(value) => setPassword(value)}
    />
    <Input
      label="Confirm Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      placeholder="p@ssw0rd123"
      secureTextEntry
      onChangeText={(value) => setConfirmPassword(value)}
    />
    <Button title="Submit" onPress={handleSignUp} />
  </Fragment>
);

SignUp.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};
