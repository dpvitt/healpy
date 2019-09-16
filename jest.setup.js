import React from 'react';

jest.mock('react-native-elements', () => ({
  Input: (props) => <input {...props} />,
  Button: (props) => <button {...props} />,
}));
