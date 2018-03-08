/* @flow */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { COLORS } from '../constants';

const CHEVRON_IMAGE = require('./icon_chevron.png');

/**
 * The BackButton component
 * @export
 * @prop {boolean} [disabled=false] If the button is disabled.
 * @prop {*} onPress The method called when the button is tapped.
 */
const BackButton = ({
  disabled = false,
  onPress
}: {
  disabled: boolean,
  onPress: () => mixed
}) => {
  const {
    chevronStyle,
    containerStyle,
    disabledStyle,
    pressedStyle,
    regularStyle
  } = styles;

  const chevron = (
    <Image style={chevronStyle} source={CHEVRON_IMAGE} resizeMode={'contain'} />
  );

  return (
    <View style={[disabled && disabledStyle, containerStyle, pressedStyle]}>
      {chevron}
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[containerStyle, regularStyle]}
        activeOpacity={0}
        focusedOpacity={0}
      >
        {chevron}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronStyle: { height: 21, width: 14 },
  containerStyle: {
    alignItems: 'center',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  disabledStyle: {
    opacity: 0.5
  },
  pressedStyle: {
    borderColor: COLORS.DARK_BLUE,
    borderWidth: 2
  },
  regularStyle: {
    borderColor: COLORS.MEDIUM_GRAY,
    borderWidth: 2,
    left: -2,
    position: 'absolute',
    top: -2
  }
});

export { BackButton };
