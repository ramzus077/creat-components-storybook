import React, { PureComponent } from 'react';
import {
  DatePickerIOS,
  DatePickerAndroid,
  View,
  TouchableHighlight,
  TextInput,
  Platform
} from 'react-native';

import { COLORS } from '../constants';
import { commonStyles } from './styles';
import InputField from './InputField';
import SelectModal from './SelectModal';

/**
 *  DatePicker for both IOS and Android
 *  @prop {*} onChange: fonction called when you change value
 *  @prop {boolean} disabled: make the input unusable
 *  @prop {string} label: see InputField
 *  @prop {string} errors: see InputField
 *  @prop {string||object} schema: see InputField
 *  @prop {string} help: see InputField
 */
class DatePicker extends PureComponent {
  state = { date: new Date(Date.now()), openedModalIOS: false };

  onChange = date => {
    this.setState({ date });
    this.props.onChange(date);
  };

  /**
   * Android functionality that opens the native datepicker
   */
  async openAndroidDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: this.state.date,
        mode: 'spinner'
      });
      if (action === 'dateSetAction') {
        const date = new Date(year, month, day);
        this.setState({ date });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  openModal = () => {
    if (Platform.OS === 'android') {
      this.openAndroidDatePicker();
    } else {
      this.setState({ openedModalIOS: true });
    }
  };

  closeModal = () => this.setState({ openedModalIOS: false });

  render() {
    const { disabled, label, errors, help } = this.props;

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
                  this.state.openedModalIOS && commonStyles.inputStyleFocused,
                  errors && commonStyles.inputErrorStyle
                ]}
                value={
                  `${this.state.date.getMonth() + 1}/` +
                  `${this.state.date.getDate()}/${this.state.date.getFullYear()}`
                }
                editable={false}
              />
            </View>
          </TouchableHighlight>
          {Platform.OS === 'ios' &&
            <SelectModal visible={this.state.openedModalIOS} onRequestClose={this.closeModal}>
              <DatePickerIOS date={this.state.date} mode="date" onDateChange={this.onChange} />
            </SelectModal>}
        </View>
      </InputField>
    );
  }
}

const styles = {
  inputStyle: {
    color: COLORS.GRAY
  },
  inputParentStyle: {
    borderRadius: 5
  }
};

export default DatePicker;
