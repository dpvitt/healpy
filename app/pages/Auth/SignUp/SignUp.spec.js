import React from 'react';
import renderer from 'react-test-renderer';
import { SignUp } from './SignUp';

describe('<SignUp />', () => {
  const props = {
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    setConfirmPassword: jest.fn(),
    handleSignUp: jest.fn(),
  };

  const render = renderer.create(<SignUp {...props} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const wrapper = render.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setEmail when email input updated', () => {
    const emailInput = render.root.findByProps({ label: 'Email' });
    emailInput.props.onChangeText('test');
    expect(props.setEmail).toHaveBeenCalledWith('test');
  });

  it('should call setPassword when password input updated', () => {
    const emailInput = render.root.findByProps({ label: 'Password' });
    emailInput.props.onChangeText('test');
    expect(props.setPassword).toHaveBeenCalledWith('test');
  });

  it('should call setConfirmPassword when confirm password input updated', () => {
    const passwordInput = render.root.findByProps({ label: 'Password' });
    passwordInput.props.onChangeText('test');
    expect(props.setPassword).toHaveBeenCalledWith('test');
  });

  it('should call setConfirmPassword when confirm password input updated', () => {
    const confirmPasswordInput = render.root.findByProps({
      label: 'Confirm Password',
    });
    confirmPasswordInput.props.onChangeText('test');
    expect(props.setConfirmPassword).toHaveBeenCalledWith('test');
  });

  it('should call handleSignIn when button pressed', () => {
    const button = render.root.findByProps({ title: 'Submit' });
    button.props.onPress();
    expect(props.handleSignUp).toHaveBeenCalled();
  });
});
