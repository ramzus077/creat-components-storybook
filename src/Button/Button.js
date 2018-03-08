/* @flow */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { COLORS } from '../constants';

/**
 * The Button component
 * @export
 * @prop {boolean} [disabled=false] If the button is disabled.
 * @prop {string} [label='Button'] The label of the button.
 * @prop {*} onPress The method called when the button is tapped.
 */
const Button = ({
  disabled = false,
  label = 'Button',
  onPress
}: {
  disabled: boolean,
  label: string,
  onPress: () => mixed
}) => {
  const {
    disabledStyle,
    containerStyle,
    pressedStyle,
    regularSyle,
    labelStyle
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
        style={[containerStyle, regularSyle]}
        activeOpacity={0}
        focusedOpacity={0}
      >
        {labelText}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: COLORS.WHITE,
    fontSize: 22,
    lineHeight: 22
  },
  pressedStyle: {
    backgroundColor: COLORS.MEDIUM_BLUE
  },
  regularSyle: {
    backgroundColor: COLORS.DARK_BLUE,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});

export { Button };
