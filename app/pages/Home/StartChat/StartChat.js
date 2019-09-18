import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export const StartChat = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>
      Hi, {name}. How are you feeling today? Do you want to start talking?
    </Text>
    <Button title="Let's chat" onPress={() => {}} />
  </View>
);
