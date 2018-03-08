/* @flow */
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants';

/**
 * The SaveLaterButton component
 * @export
 * @prop {boolean} [disabled=false] If the SaveLaterButton is disabled.
 * @prop {string} [label='Save for later'] The label of the SaveLaterButton.
 * @prop {boolean} [labelLeft=false] If the label is on the left of the SaveLaterButton.
 * @prop {*} onPress The method called when the SaveLaterButton is tapped.
 */

const IconButton = ({
  disabled = false,
  label = 'Upload File',
  labelLeft = false,
  myIcon = '',
  onPress
}: {
  disabled: boolean,
  label: string,
  labelLeft: boolean,
  myIcon: string,
  onPress: () => mixed
}) => {
  const {
    labelStyle,
    containerStyle,
    disabledStyle,
    pressedStyle,
    regularStyle,
    iconStyle,
    wrapperStyle,
    labelContainerStyle
  } = styles;

  // Prepare the icon.
  const icon = <Image key={'icone'} style={iconStyle} source={myIcon} resizeMode={'contain'} />;
  //prepare the label
  const labelText = (
    <View key={'labelText'} style={labelContainerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
    </View>
  );

  // Wrap the label and the icon together.
  const wrapper = (
    <View style={wrapperStyle}>
      {labelLeft ? [labelText, icon] : [icon, labelText]}
    </View>
  );
  return (
    <View style={[disabled && disabledStyle, containerStyle, pressedStyle]}>
      {wrapper}
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[containerStyle, regularStyle]}
      >
         {wrapper}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 5
  },
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
  },
  iconStyle: {
    width: 26,
    height: 26
  },
  labelContainerStyle: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default IconButton;
