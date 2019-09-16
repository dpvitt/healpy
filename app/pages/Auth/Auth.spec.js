import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from './Auth';
import { Auth as AWSAuth } from 'aws-amplify';

jest.mock('aws-amplify', () => ({
  Auth: {
    signIn: jest.fn().mockResolvedValue(),
    signUp: jest.fn().mockResolvedValue(),
    confirmSignUp: jest.fn().mockResolvedValue(),
  },
}));

describe('<Auth />', () => {
  const props = { navigation: { navigate: jest.fn() } };
  const render = shallow(<Auth {...props} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(render).toMatchSnapshot();
  });

  it('should call the AWS methods', () => {
    render.find('SignIn').prop('handleSignIn')();
    expect(AWSAuth.signIn).toHaveBeenCalled();
    render.find('SignUp').prop('handleSignUp')();
    expect(AWSAuth.signUp).toHaveBeenCalled();
    render.find('VerifyModal').prop('handleConfirmationCode')();
    expect(AWSAuth.confirmSignUp).toHaveBeenCalled();
  });
});
