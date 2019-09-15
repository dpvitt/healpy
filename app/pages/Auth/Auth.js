import React, { useState } from 'react';
import { Auth as AWSAuth } from 'aws-amplify';
import { View } from 'react-native';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { VerifyModal } from './VerifyModal';

export const Auth = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SignUp
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        handleSignUp={() =>
          handleSignUp({ email, password, confirmPassword, setModalVisible })
        }
      />
      <SignIn
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={() => handleSignIn({ email, password, navigate })}
      />
      <VerifyModal
        modalVisible={modalVisible}
        setConfirmationCode={setConfirmationCode}
        handleConfirmationCode={() =>
          handleConfirmationCode({
            email,
            confirmationCode,
            setModalVisible,
            navigate,
          })
        }
      />
    </View>
  );
};

const handleSignIn = ({ email, password, navigate }) => {
  AWSAuth.signIn(email, password)
    .then((user) => {
      console.log(user);
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
