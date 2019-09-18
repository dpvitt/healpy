import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { UserContext } from '../../../providers/UserContextProvider';
import { CreateUserMutation } from '../../../mutations/createUser';

export const CollectName = () => {
  const [name, setName] = useState('');
  const [user] = useContext(UserContext);
  const {
    id,
    attributes: { email },
  } = user;
  return (
    <CreateUserMutation>
      {({ createUser }) => (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>
            Welcome to Healpy. To get you started - please enter your name. We
            will never pass your name onto anyone, we just want to be able to
            say hello!
          </Text>
          <Input
            label="Name"
            onChangeText={(value) => setName(value)}
            placeholder="Tony"
          />
          <Button
            title="Submit"
            onPress={() => createUser({ id, name, email })}
          />
        </View>
      )}
    </CreateUserMutation>
  );
};
