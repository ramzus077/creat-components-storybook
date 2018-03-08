/* @flow */
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import { COLORS } from '../constants';

const SAVE_ICON = require('./icon_save.png');

/**
 * The SaveLaterButton component
 * @export
 * @prop {boolean} [disabled=false] If the SaveLaterButton is disabled.
 * @prop {string} [label='Save for later'] The label of the SaveLaterButton.
 * @prop {boolean} [labelLeft=false] If the label is on the left of the SaveLaterButton.
 * @prop {*} onPress The method called when the SaveLaterButton is tapped.
 */
const SaveLaterButton = ({
  disabled = false,
  label = 'Save for later',
  labelLeft = false,
  onPress
}: {
  disabled: boolean,
  label: string,
  labelLeft: boolean,
  onPress: () => mixed
}) => {
  // Prepare the label.
  const labelText = (
    <View key={'labelText'} style={styles.labelContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );

  // Prepare the icon.
  const icon = (
    <Image
      key={'icon-save'}
      style={styles.icon}
      source={SAVE_ICON}
      resizeMode={'contain'}
    />
  );

  // Wrap the label and the icon together.
  const container = (
    <View style={styles.container}>
      {labelLeft ? [labelText, icon] : [icon, labelText]}
    </View>
  );

  // If the button is disabled, reduce its opacity and make it uninteractable.
  if (disabled) {
    return <View style={styles.buttonDisabled}>{container}</View>;
  }

  // Return a TouchableOpacity containing the button.
  return (
    <TouchableOpacity onPress={onPress}>
      {container}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 29
  },
  buttonDisabled: {
    opacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 26,
    height: 26
  },
  labelContainer: {
    marginLeft: 10
  },
  label: {
    fontSize: 18,
    color: COLORS.DARK_BLUE
    // fontFamily: 'MetaOffc-Light'
  }
});

export { SaveLaterButton };
