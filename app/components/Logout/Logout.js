import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Auth as AWSAuth } from 'aws-amplify';
import { Button } from 'react-native-elements';

export const Logout = ({ navigate }) => (
  <View style={{ flex: 1, justifyContent: 'end', alignItems: 'center' }}>
    <Button title="Sign Out" onPress={() => handleSignOut({ navigate })} />
  </View>
);

Logout.propTypes = {
  navigate: PropTypes.func.isRequired,
};

const handleSignOut = ({ navigate }) => {
  AWSAuth.signOut()
    .then(() => navigate('Auth'))
    .catch((err) => console.log(err));
};
