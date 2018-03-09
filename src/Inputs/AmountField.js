/* @flow */
import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

// TODO: use those functions to format
import { applyLocalizationOnAmount } from './ApplyAmountLocalization';
import { COLORS } from '../constants';
import { commonStyles } from './styles';
import InputField from './InputField';

class AmountField extends PureComponent {
  state = {
    focused: false,
    myValue: '',
    monetaryValue: ''
  };

  onAmountChange(text: any) {
    console.log(' on amount change ');
    let textValue = this._replaceComma(text);
    textValue = this._validateDotInput(textValue);
    textValue = this._validateMaximumDecimals(textValue);
    this.setState({ myValue: textValue });
    this.setState({ monetaryValue: textValue });
    this.props.onChange(textValue); 
  }

  onAmountFocus() {
    this.setState({ myValue: this.state.monetaryValue });
  }

  onAmountBlur() {
    if (this.state.myValue.length > 0) {
      const text = this.state.myValue;
      const newText = applyLocalizationOnAmount(text);
      this.setState({ myValue: newText });
    } else {
      this.state.myValue = '';
    }
  }

   _replaceComma(text) {
    return text.replace(',', '.');
  }

  props: {
    onChange: any,
    autoFocus: boolean,
    selectTextOnFocus: boolean,
    maxLength: number,
    placeholder: string,
    schema: any,
    disabled: boolean,
    label: string,
    errors: Array<string>,
    width: number,
    help: string,
    value: string
  };

  // We don't want to add another dot in the text since this is an amount value.
  // Only one dot is accepted.
  _validateDotInput(text) {
    let output = text.split('.');
    if (output.length > 1) {
      output = `${output.shift()}.${output.join('')}`;
    } else {
      output = text;
    }
    return output;
  }

  // We validate that there's only 2 decimals.
  _validateMaximumDecimals(text) {
    const indexOfDot = text.indexOf('.');
    const output = indexOfDot !== -1 ? text.slice(0, indexOfDot + 3) : text;
    return output;
  }
  render() {
    const {
      autoFocus = false,
      selectTextOnFocus = false,
      maxLength,
      placeholder,
      disabled,
      label,
      errors,
      width = 250,
      help,
      value
    } = this.props;
    const { inputStyle, inputStyleFocused, inputErrorStyle } = commonStyles; 
    const keyboardType = 'numeric';
    
    return (
      <InputField label={label} errors={errors} disabled={disabled} width={width} help={help}>
        <TextInput
          style={[
            inputStyle,
            this.state.focused && inputStyleFocused,
            errors && inputErrorStyle
          ]}
          editable={!disabled}
          onFocus={this.onAmountFocus.bind(this)}
          onBlur={this.onAmountBlur.bind(this)}
          value={value && `${value}`}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          onChangeText={this.onAmountChange.bind(this)}
          maxLength={maxLength}
          selectTextOnFocus={selectTextOnFocus}
          underlineColorAndroid="transparent"
          value={this.state.myValue}
        />
      </InputField>
    );
  }
}

export default AmountField;
