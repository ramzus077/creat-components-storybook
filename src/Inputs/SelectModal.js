/* @flow */
import React from 'react';
import { View, Modal, TouchableWithoutFeedback, Platform } from 'react-native';

import { COLORS } from '../constants';

/**
 *  Modal for a select (datepicker also)
 *  used mainly for IOS selects
 *  @prop {boolean} visible
 *  @prop {component} children
 *  @prop {*} onRequestClose: fonction called when user presses outside the modal
 */
export default ({
  visible,
  children,
  onRequestClose
}: {
  visible: boolean,
  children?: any,
  onRequestClose: () => mixed
}) => {
  const { exteriorStyle, interiorStyle } = styles;

  return (
    <Modal animationType={'slide'} transparent visible={visible}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={exteriorStyle} />
      </TouchableWithoutFeedback>
      <View style={interiorStyle}>
        {children}
      </View>
    </Modal>
  );
};

const styles = {
  exteriorStyle: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 22 : 0
  },
  interiorStyle: {
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center'
  }
};
