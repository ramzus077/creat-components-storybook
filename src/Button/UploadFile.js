/* @flow */
import React from 'react';
import { View } from 'react-native';
import IconButton from './IconButton';

const UploadFile = ({
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
  return (
    <View>
      <IconButton
        disabled={disabled}
        label={label}
        labelLeft={labelLeft}
        myIcon={myIcon}
        onPress={onPress}
      />
    </View>
  );
};

export { UploadFile };
