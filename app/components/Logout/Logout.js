import React from 'react';
import { Auth as AWSAuth } from 'aws-amplify';
import { Button } from 'react-native-elements';

export const Logout = ({ navigate }) => (
  <Button title="Sign Out" onPress={() => handleSignOut({ navigate })} />
);

const handleSignOut = ({ navigate }) => {
  AWSAuth.signOut()
    .then(() => navigate('Auth'))
    .catch((err) => console.log(err));
};
