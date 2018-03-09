import React, { PureComponent } from 'react';
import { Picker, View } from 'react-native';
import _ from 'lodash';

import { COLORS, FONTS } from '../constants';
import InputField from './InputField';

/**
 *  Selector for Android
 *  @prop {object} options: contains the list of option
 *  @prop {boolean} defaultOption: one of the options used as default
 *  @prop {*} onChange: fonction called when you change value
 *  @prop {boolean} disabled: make the input unusable
 *  @prop {string} label: see InputField
 *  @prop {string} errors: see InputField
 *  @prop {string} tip: see InputField
 */
class SelectField extends PureComponent {
  onChange = itemValue => {
    this.props.onChange(itemValue);
  };

  render() {
    const { options, disabled, label, errors, help, value } = this.props;
    const {
      containerStyle,
      pickerStyle,
      pickerItemStyle,
      containerErrorStyle
    } = styles;
    const { enumOptions } = options;
    const items = [<Picker.Item label={''} value={''} key={'default'} />];
    _.forEach(enumOptions, item => {
      items.push(<Picker.Item {...item} key={item.value} />);
    });

    return (
      <InputField label={label} errors={errors} disabled={disabled} help={help}>
        <View style={[containerStyle, errors && containerErrorStyle]}>
          <Picker
            selectedValue={value}
            onValueChange={this.onChange}
            style={pickerStyle}
            itemStyle={pickerItemStyle}
            enabled={!disabled}
            prompt={label}
          >
            {items}
          </Picker>
        </View>
      </InputField>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: COLORS.WHITE,
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.MEDIUM_GRAY,
    paddingRight: 5,
    paddingLeft: 5
  },
  containerErrorStyle: {
    backgroundColor: COLORS.PINK,
    borderColor: COLORS.RED
  },
  pickerStyle: {
    height: 44,
    color: COLORS.DARK_GREY
  },
  // Doesn't work for Android yet
  pickerItemStyle: {
    fontFamily: FONTS.LIGHT
  }
};

export default SelectField;
