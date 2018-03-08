/* @flow */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { COLORS } from '../constants';

/**
 * The LightButton component
 * @export
 * @prop {boolean} [disabled=false] If the button is disabled.
 * @prop {*} onPress The method called when the button is tapped.
 */
const LightButton = ({
  disabled = false,
  label = 'Button',
  onPress
}: {
  disabled: boolean,
  label: string,
  onPress: () => mixed
}) => {
  const {
    labelStyle,
    containerStyle,
    disabledStyle,
    pressedStyle,
    regularStyle
  } = styles;

  const labelText = (
    <Text style={labelStyle}>
      {label}
    </Text>
  );

  return (
    <View style={[disabled && disabledStyle, containerStyle, pressedStyle]}>
      {labelText}
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[containerStyle, regularStyle]}
        activeOpacity={0}
        focusedOpacity={0}
      >
        {labelText}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronStyle: { height: 21, width: 14 },
  containerStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center'
  },
  disabledStyle: {
    opacity: 0.5
  },
  labelStyle: {
    color: COLORS.DARK_BLUE,
    // fontFamily: FONTS.LIGHT,
    fontSize: 20,
    lineHeight: 22
  },
  pressedStyle: {
    borderColor: COLORS.DARK_BLUE,
    borderWidth: 2
  },
  regularStyle: {
    borderColor: COLORS.MEDIUM_GRAY,
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    borderWidth: 2
  }
});

export { LightButton };
