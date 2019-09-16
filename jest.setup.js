import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native-elements', () => ({
  Input: (props) => <input {...props} />,
  Button: (props) => <button {...props} />,
}));
