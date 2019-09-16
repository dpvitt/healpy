import React from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export const CollectName = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>
      Welcome to Healpy. To get you started - please enter your name. We will
      never pass your name onto anyone, we just want to be able to say hello!
    </Text>
    <Input label="Name" onChangeText={(value) => value} placeholder="Tony" />
    <Button title="Submit" onPress={() => {}} />
  </View>
);
