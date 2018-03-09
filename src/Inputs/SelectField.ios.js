/* @flow */
import React, { PureComponent } from 'react';
import { Picker, View, TextInput, TouchableHighlight, Image } from 'react-native';
import _ from 'lodash';

import { COLORS } from '../constants';
import { commonStyles } from './styles';
import InputField from './InputField';
import SelectModal from './SelectModal';

const DROPDOWN_IMAGE_DOWN = require('./icon_dropdown_arrow_down.png');
const DROPDOWN_IMAGE_UP = require('./icon_dropdown_arrow_up.png');

/**
 *  Selector for IOS
 *  @prop {object} options: contains the list of option
 *  @prop {boolean} defaultOption: one of the options used as default
 *  @prop {*} onChange: fonction called when you change value
 *  @prop {boolean} disabled: make the input unusable
 *  @prop {string} label: see InputField
 *  @prop {string} errors: see InputField
 *  @prop {string} tip: see InputField
 *  @prop {string} value: The value selected
 */
class SelectField extends PureComponent {
  state = { openedModal: false };

  openModal = () => this.setState({ openedModal: true });

  closeModal = () => this.setState({ openedModal: false });

  props: {
    options: { enumOptions: { value: string, label: string } },
    disabled: boolean,
    label: string,
    errors: Array<string>,
    help: string,
    value: string,
    onChange: () => mixed
  };

  render() {
    const { options, disabled, label, errors, help, value, onChange } = this.props;
    const { enumOptions } = options;

    const items = [<Picker.Item label={'Sélectionnez'} value={''} key={'default'} />];
    _.forEach(enumOptions, item => {
      items.push(<Picker.Item {...item} key={item.value} />);
    });

    const selectedValue = value && _.find(enumOptions, { value });
    const selectedLabel = (selectedValue && selectedValue.label) || 'Sélectionnez';

    return (
      <InputField label={label} errors={errors} disabled={disabled} help={help}>
        <View>
          <TouchableHighlight
            style={styles.inputParentStyle}
            onPress={!disabled ? this.openModal : null}
          >
            <View>
              <TextInput
                style={[
                  commonStyles.inputStyle,
                  styles.inputStyle,
                  this.state.openedModal && commonStyles.inputStyleFocused,
                  errors && commonStyles.inputErrorStyle
                ]}
                value={selectedLabel}
                editable={false}
              />
              <Image
                style={styles.dropdownImageStyle}
                source={this.state.openedModal ? DROPDOWN_IMAGE_UP : DROPDOWN_IMAGE_DOWN}
                resizeMode={'contain'}
              />
            </View>
          </TouchableHighlight>
          <SelectModal visible={this.state.openedModal} onRequestClose={this.closeModal}>
            <Picker selectedValue={value} onValueChange={onChange}>
              {items}
            </Picker>
          </SelectModal>
        </View>
      </InputField>
    );
  }
}

const styles = {
  dropdownImageStyle: {
    width: 8,
    height: 5,
    position: 'absolute',
    right: 18,
    bottom: 22
  },
  inputStyle: {
    color: COLORS.GRAY
  },
  inputParentStyle: {
    borderRadius: 5
  }
};

export default SelectField;
