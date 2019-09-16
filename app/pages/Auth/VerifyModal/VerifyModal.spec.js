import React from 'react';
import { shallow } from 'enzyme';
import { VerifyModal } from './VerifyModal';

describe('<VerifyModal />', () => {
  const props = {
    modalVisible: false,
    setConfirmationCode: jest.fn(),
    handleConfirmationCode: jest.fn(),
  };

  const render = shallow(<VerifyModal {...props} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(render).toMatchSnapshot();
  });

  it('should call setConfirmPassword when confirm password input updated', () => {
    const confirmCodeInput = render.find('Input').at(0);
    confirmCodeInput.prop('onChangeText')('test');
    expect(props.setConfirmationCode).toHaveBeenCalledWith('test');
  });

  it('should call handleSignIn when button pressed', () => {
    const button = render.find('Button');
    button.prop('onPress')();
    expect(props.handleConfirmationCode).toHaveBeenCalled();
  });
});
