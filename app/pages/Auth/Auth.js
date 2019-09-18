import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Auth as AWSAuth } from 'aws-amplify';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { VerifyModal } from './VerifyModal';
import { UserContext } from '../../providers/UserContextProvider';

const SIGN_IN = 'sign_in_mode';
const SIGN_UP = 'sign_up_mode';

export const Auth = ({ navigation: { navigate } }) => {
  const [mode, setMode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [, setUser] = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {mode === SIGN_UP ? (
        <SignUp
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          handleSignUp={() => {
            handleSignUp({ email, password, confirmPassword, setModalVisible });
          }}
        />
      ) : null}

      {mode === SIGN_IN ? (
        <SignIn
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignIn={() => {
            handleSignIn({ email, password, navigate });
            setCurrentUser({ setUser });
          }}
        />
      ) : null}

      <Button title="Sign up" onPress={() => setMode(SIGN_UP)} />
      <Button title="Sign in" onPress={() => setMode(SIGN_IN)} />

      <VerifyModal
        modalVisible={modalVisible}
        setConfirmationCode={setConfirmationCode}
        handleConfirmationCode={() => {
          handleConfirmationCode({
            email,
            confirmationCode,
            setModalVisible,
            navigate,
          });
          setCurrentUser({ setUser });
        }}
      />
    </View>
  );
};

Auth.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const handleSignIn = ({ email, password, navigate }) => {
  AWSAuth.signIn(email, password)
    .then(() => {
      navigate('Home');
    })
    .catch((err) => console.log(err));
};

const handleSignUp = ({
  email,
  password,
  confirmPassword,
  setModalVisible,
}) => {
  if (password === confirmPassword) {
    AWSAuth.signUp({
      username: email,
      password,
      attributes: { email },
    })
      .then(() => setModalVisible(true))
      .catch((err) => console.log(err));
  }
};

const handleConfirmationCode = ({
  email,
  confirmationCode,
  setModalVisible,
  navigate,
}) => {
  AWSAuth.confirmSignUp(email, confirmationCode, {})
    .then(() => {
      setModalVisible(false);
      navigate('Home');
    })
    .catch((err) => console.log(err));
};

const setCurrentUser = ({ setUser }) => {
  AWSAuth.currentUserInfo()
    .then((user) => setUser(user))
    .catch(() => navigate('Auth'));
};
