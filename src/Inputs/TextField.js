/* @flow */
import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

import { COLORS, FIELD_TYPES } from '../constants';
import { commonStyles } from './styles';
import InputField from './InputField';

/**
 *  Text input (multiline & single line)
 *  @prop {*} onChange: The function called when input is modified
 *  @prop {boolean} multiline: enabled multiline for the input
 *  @prop {number} multilineHeight: custom height if you use multiline
 *  @prop {boolean} autoCorrect
 *  @prop {boolean} autoFocus = false,
 *  @prop {'none', 'sentences', 'words', 'characters'} autoCapitalize
 *  @prop {boolean} selectTextOnFocus
 *  @prop {number} maxLength: max num of characters for the inputs
 *  @prop {string} placeholder
 *  @prop {any} schema: contains type of values (ex: phone, text, amount )
 *  @prop {boolean} disabled: make the input unusable
 *  @prop {string} label: see InputField
 *  @prop {array} errors: see InputField
 *  @prop {number} width: see InputField
 *  @prop {string} help: see InputField
 *  @prop {string} value
 */
class TextField extends PureComponent {
  state = { focused: false };

  onFocus = () => this.setState({ focused: true });

  onBlur = () => this.setState({ focused: false });

  props: {
    onChange: any,
    multiline: boolean,
    multilineHeight: number,
    autoCorrect: boolean,
    autoFocus: boolean,
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters',
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

  // Parse the value before sending it to parent
  parseValue = (text: string) => {
    const { type } = this.props.schema;
    let parsedValue;
    switch (type) {
      case FIELD_TYPES.INTEGER:
      case FIELD_TYPES.NUMBER:
        parsedValue = Number(text);
        break;
      default:
        parsedValue = `${text}`;
        break;
    }
    return parsedValue;
  };

  render() {
    const {
      onChange,
      multiline = false,
      multilineHeight = 135,
      autoCorrect = true,
      autoFocus = false,
      autoCapitalize = 'none', // values: 'sentences', 'words', 'characters'
      selectTextOnFocus = false,
      maxLength,
      placeholder,
      schema,
      disabled,
      label,
      errors,
      width = 250,
      help,
      value
    } = this.props;
    const { type } = schema;

    const { inputStyle, inputStyleFocused, inputErrorStyle } = commonStyles;
    const multilineStyle = { height: multilineHeight };

    // Device keyboard matches the input type
    let keyboardType;
    switch (type) {
      case FIELD_TYPES.EMAIL:
        keyboardType = 'email-address';
        break;
      case FIELD_TYPES.PHONE:
        keyboardType = 'phone-pad';
        break;
      case FIELD_TYPES.NUMBER:
      case FIELD_TYPES.INTEGER:
        keyboardType = 'numeric';
        break;
      default:
        keyboardType = 'default';
    }

    return (
      <InputField
        label={label}
        errors={errors}
        disabled={disabled}
        width={width}
        help={help}
      >
        <TextInput
          style={[
            inputStyle,
            multiline && multilineStyle,
            this.state.focused && inputStyleFocused,
            errors && inputErrorStyle
          ]}
          editable={!disabled}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          value={value && `${value}`}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY}
          secureTextEntry={type === FIELD_TYPES.PASSWORD}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          onChangeText={(text: string) => onChange(this.parseValue(text))}
          maxLength={maxLength}
          selectTextOnFocus={selectTextOnFocus}
          underlineColorAndroid="transparent"
          multiline={multiline}
        />
      </InputField>
    );
  }
}

export default TextField;
