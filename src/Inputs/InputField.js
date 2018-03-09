/* @flow */
import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Normalize from '../Nomalize';
import { COLORS, FONTS } from '../constants';
import Modal from '../Modal';

const TOOLTIP_IMAGE = require('./icon_info.png');
const TOOLTIP_IMAGE_PRESSED = require('./icon_info_press.png');

/**
 *  Input parent component
 *  @prop {component} children: component inside the input
 *  @prop {boolean} disabled
 *  @prop {string} label
 *  @prop {string} errors: message, not set or empty if there's no errors
 *  @prop {string} help: make the tooltip appear, shows tip on press
 *  @prop {boolean} radioButton: If the input is a list of radio buttons
 */
export default class InputField extends PureComponent {
  state = { openedHelp: false };

  toggleHelp = () => this.setState({ openedHelp: !this.state.openedHelp });

  props: {
    disabled: boolean,
    children?: any,
    label: string,
    errors: Array<string>,
    help: string,
    radioButton: boolean
  };

  render() {
    const { disabled, children, label, errors, help, radioButton } = this.props;
    const {
      containerStyle,
      containerStyleDisabled,
      labelStyle,
      errorStyle,
      labelParentStyle,
      tooltipStyle,
      radioButtonLabelStyle
    } = styles;

    return (
      <View style={[containerStyle, disabled && containerStyleDisabled]}>
        <View style={labelParentStyle}>
          <Text
            style={[labelStyle, radioButton ? radioButtonLabelStyle : null]}
          >
            {label}
          </Text>
          {help &&
            <TouchableOpacity disabled={disabled} onPress={this.toggleHelp}>
              <Image
                style={tooltipStyle}
                source={
                  this.state.openedHelp ? TOOLTIP_IMAGE_PRESSED : TOOLTIP_IMAGE
                }
                resizeMode={'contain'}
              />
            </TouchableOpacity>}
        </View>
        {children}
        {errors &&
          errors.map((error, index) =>
            <Text key={index} style={errorStyle}>
              {error}
            </Text>
          )}

        <Modal
          visible={this.state.openedHelp}
          onClose={this.toggleHelp}
          text={help}
          fullscreen={false}
          dark
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingBottom: 22
  },
  containerStyleDisabled: {
    opacity: 0.25
  },
  labelStyle: {
    marginBottom: 6,
    fontSize: Normalize(20),
    color: COLORS.DARK_GREY
  },
  errorStyle: {
    marginTop: 5,
    color: COLORS.RED
  },
  labelParentStyle: {
    flexDirection: 'row'
  },
  tooltipStyle: {
    width: 24,
    height: 24,
    marginLeft: 8
  },
  radioButtonLabelStyle: {
    marginBottom: 21,
    fontSize: Normalize(22)
  }
};
