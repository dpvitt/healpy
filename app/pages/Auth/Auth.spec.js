import React from 'react';
import renderer from 'react-test-renderer';
import { Auth } from './Auth';

describe('<Auth />', () => {
  it('should render', () => {
    const props = { navigation: { navigate: jest.fn() } };
    const wrapper = renderer.create(<Auth {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
