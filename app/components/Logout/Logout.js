import React from 'react';
import PropTypes from 'prop-types';
import { Auth as AWSAuth } from 'aws-amplify';
import { Button } from 'react-native-elements';

export const Logout = ({ navigate }) => (
  <Button title="Sign Out" onPress={() => handleSignOut({ navigate })} />
);

Logout.propTypes = {
  navigate: PropTypes.func.isRequired,
};

const handleSignOut = ({ navigate }) => {
  AWSAuth.signOut()
    .then(() => navigate('Auth'))
    .catch((err) => console.log(err));
};
