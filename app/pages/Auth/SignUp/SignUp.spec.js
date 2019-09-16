import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

describe('<SignIn />', () => {
  const props = {
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    setConfirmPassword: jest.fn(),
    handleSignUp: jest.fn(),
  };

  const render = shallow(<SignUp {...props} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(render).toMatchSnapshot();
  });

  it('should call setEmail when email input updated', () => {
    const emailInput = render.find('Input').at(0);
    emailInput.prop('onChangeText')('test');
    expect(props.setEmail).toHaveBeenCalledWith('test');
  });

  it('should call setPassword when password input updated', () => {
    const passwordInput = render.find('Input').at(1);
    passwordInput.prop('onChangeText')('test');
    expect(props.setPassword).toHaveBeenCalledWith('test');
  });

  it('should call setConfirmPassword when confirm password input updated', () => {
    const passwordInput = render.find('Input').at(2);
    passwordInput.prop('onChangeText')('test');
    expect(props.setConfirmPassword).toHaveBeenCalledWith('test');
  });

  it('should call handleSignIn when button pressed', () => {
    const button = render.find('Button');
    button.prop('onPress')();
    expect(props.handleSignUp).toHaveBeenCalled();
  });
});
