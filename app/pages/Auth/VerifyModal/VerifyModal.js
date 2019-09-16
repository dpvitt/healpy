import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';

export const VerifyModal = ({
  modalVisible,
  setConfirmationCode,
  handleConfirmationCode,
}) => (
  <Modal visible={modalVisible}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Input
        label="Confirmation Code"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(value) => setConfirmationCode(value)}
      />
      <Button title="Submit" onPress={handleConfirmationCode} />
    </View>
  </Modal>
);

VerifyModal.propTypes = {
  modalVisible: PropTypes.func.isRequired,
  setConfirmationCode: PropTypes.func.isRequired,
  handleConfirmationCode: PropTypes.func.isRequired,
};
