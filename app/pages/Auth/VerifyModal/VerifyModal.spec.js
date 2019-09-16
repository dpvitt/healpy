import React from 'react';
import renderer from 'react-test-renderer';
import { VerifyModal } from './VerifyModal';

describe('<VerifyModal />', () => {
  const props = {
    modalVisible: false,
    setConfirmationCode: jest.fn(),
    handleConfirmationCode: jest.fn(),
  };

  const render = renderer.create(<VerifyModal {...props} />);

  it('should render', () => {
    const wrapper = render.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setConfirmPassword when confirm password input updated', () => {
    const confirmCodeInput = render.root.findByProps({
      label: 'Confirmation Code',
    });
    confirmCodeInput.props.onChangeText('test');
    expect(props.setConfirmationCode).toHaveBeenCalledWith('test');
  });

  it('should call handleSignIn when button pressed', () => {
    const button = render.root.findByProps({ title: 'Submit' });
    button.props.onPress();
    expect(props.handleConfirmationCode).toHaveBeenCalled();
  });
});
