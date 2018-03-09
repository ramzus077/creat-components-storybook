import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select, object, number, array } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import TextField from '../../../src/Inputs/TextField';
import AmountField from '../../../src/Inputs/AmountField';
import SelectField from '../../../src/Inputs/SelectField';
import DatePicker from '../../../src/Inputs/DatePicker';
import InputField from '../../../src/Inputs/InputField';
import { FIELD_TYPES } from '../../../src/constants';

const stories = storiesOf('Inputs', module);

stories.addDecorator(withKnobs);
stories.addDecorator(getStory =>
  <CenterView>
    {getStory()}
  </CenterView>
);

stories.add('Text field', () => {
  const label = text('Label', 'Name');
  const multiline = boolean('Multiline', false);
  const hasError = boolean('Display error', false);
  const errors = hasError ? array('Errors', ['Field must not be empty']) : null;
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        help={help}
        schema={{}}
      />
    </View>
  );
});

stories.add('Text field with value', () => {
  const label = text('Label', 'Name');
  const multiline = boolean('Multiline', false);
  const hasError = boolean('Display error', false);
  const errors = hasError ? array('Errors', ['Field must not be empty']) : null;
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');
  const value = text('Value', 'John Doe');

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        help={help}
        schema={{}}
        value={value}
      />
    </View>
  );
});

stories.add('Text field with errors', () => {
  const label = text('Label', 'Name');
  const multiline = boolean('Multiline', false);
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');
  const value = text('Value', 'John Doe');

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        help={help}
        schema={{}}
        value={value}
      />
    </View>
  );
});

stories.add('Text field with multiline', () => {
  const label = text('Label', 'Name');
  const multiline = boolean('Multiline', true);
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');
  const value = text('Value', 'John Doe');

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        help={help}
        schema={{}}
        value={value}
      />
    </View>
  );
});

stories.add('Text field with email type', () => {
  const label = text('Label', 'Name');
  const multiline = boolean('Multiline', false);
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'jj@example.com');
  const onChange = action('changed-text');
  const schema = { type: FIELD_TYPES.EMAIL };

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        help={help}
        schema={schema}
      />
    </View>
  );
});

stories.add('Text field with default multiline', () => {
  const label = text('Label', 'Name');
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');
  const schema = { type: FIELD_TYPES.EMAIL };

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        help={help}
        schema={schema}
      />
    </View>
  );
});

stories.add('Text field with type phone', () => {
  const label = text('Label', 'Name');
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', '+7 123 123 123');
  const onChange = action('changed-text');
  const schema = { type: FIELD_TYPES.PHONE };

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        help={help}
        schema={schema}
      />
    </View>
  );
});

stories.add('Text field with type number', () => {
  const label = text('Label', 'Name');
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');
  const schema = { type: FIELD_TYPES.NUMBER };

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        help={help}
        schema={schema}
      />
    </View>
  );
});

stories.add('Text field with type integer', () => {
  const label = text('Label', 'Name');
  const errors = array('Errors', ['Field must not be empty']);
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the name your parents gave you') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', 'John Doe');
  const onChange = action('changed-text');
  const schema = { type: FIELD_TYPES.INTEGER };

  return (
    <View style={{ width: 250 }}>
      <TextField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        help={help}
        schema={schema}
      />
    </View>
  );
});

stories.add('Select field', () => {
  const label = text('Label', 'Country');
  const hasError = boolean('Display error', false);
  const errors = hasError ? array('Errors', ['You must make a choice']) : null;
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Select the country where you live at the moment') : null;
  const disabled = boolean('Disabled', false);
  const onChange = action('changed-select');

  const options = object('Options', {
    enumOptions: [
      { label: 'Test 1', value: 1 },
      { label: 'Test 2', value: 2 },
      { label: 'Test 3', value: 3 },
      { label: 'Test 4', value: 4 },
      { label: 'Test 5', value: 5 }
    ]
  });

  const value = number('Value', 3);

  return (
    <View style={{ width: 250 }}>
      <SelectField
        label={label}
        errors={errors}
        disabled={disabled}
        options={options}
        onChange={onChange}
        help={help}
        value={value}
      />
    </View>
  );
});

stories.add('Select field iOS disabled', () => {
  const label = text('Label', 'Country');
  const hasError = boolean('Display error', false);
  const errors = hasError ? array('Errors', ['You must make a choice']) : null;
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Select the country where you live at the moment') : null;
  const disabled = boolean('Disabled', true);
  const onChange = action('changed-select');

  const options = object('Options', {
    enumOptions: [
      { label: 'Test 1', value: 1 },
      { label: 'Test 2', value: 2 },
      { label: 'Test 3', value: 3 },
      { label: 'Test 4', value: 4 },
      { label: 'Test 5', value: 5 }
    ]
  });

  const value = number('Value', 3);

  return (
    <View style={{ width: 250 }}>
      <SelectField
        label={label}
        errors={errors}
        disabled={disabled}
        options={options}
        onChange={onChange}
        help={help}
        value={value}
      />
    </View>
  );
});

stories.add('Select field iOS disabled', () => {
  const label = text('Label', 'Country');
  const hasError = boolean('Display error', false);
  const errors = hasError ? array('Errors', ['You must make a choice']) : null;
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Select the country where you live at the moment') : null;
  const disabled = boolean('Disabled', true);
  const onChange = action('changed-select');

  const options = object('Options', {
    enumOptions: []
  });

  const value = number('Value', 3);

  return (
    <View style={{ width: 250 }}>
      <SelectField
        label={label}
        errors={errors}
        disabled={disabled}
        options={options}
        onChange={onChange}
        help={help}
        value={value}
      />
    </View>
  );
});

stories.add('DatePicker field', () => {
  const label = text('Label', 'Date');
  const hasError = boolean('Display error', true);
  const errors = hasError ? array('Errors', ['You must make a choice']) : null;
  const hasHelp = boolean('Display help', false);
  const help = hasHelp ? text('Help', 'Date must be between x and y') : null;
  const disabled = boolean('Disabled', false);
  const onChange = action('changed-date');

  return (
    <View style={{ width: 250 }}>
      <DatePicker
        label={label}
        errors={errors}
        disabled={disabled}
        onChange={onChange}
        help={help}
      />
    </View>
  );
});

stories.add('Amount Field', () => {
  const label = text('Label', 'Amount Field');
  const multiline = boolean('Multiline', false);
  const hasError = boolean('Display error', false);
  const errors = hasError ? array('Errors', ['Field must not be empty']) : null;
  const hasHelp = boolean('Display help', true);
  const help = hasHelp ? text('Help', 'Enter the amount') : null;
  const disabled = boolean('Disabled', false);
  const placeholder = text('Placeholder', '0,00$');
  const onChange = action('changed-text');

  return (
    <View style={{ width: 250 }}>
      <AmountField
        label={label}
        errors={errors}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        help={help}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
      />
    </View>
  );
});

stories.add('DatePicker field disabled', () => {
  const label = text('Label', 'Date');
  const hasError = boolean('Display error', true);
  const errors = hasError ? array('Errors', ['You must make a choice']) : null;
  const hasHelp = boolean('Display help', false);
  const help = hasHelp ? text('Help', 'Date must be between x and y') : null;
  const disabled = boolean('Disabled', true);
  const onChange = action('changed-date');

  return (
    <View style={{ width: 250 }}>
      <DatePicker
        label={label}
        errors={errors}
        disabled={disabled}
        onChange={onChange}
        help={help}
      />
    </View>
  );
});

stories.add('InputField with radio button', () => {
  const radioButton = boolean('RadioButton', true);

  return (
    <View style={{ width: 250 }}>
      <InputField radioButton={radioButton} />
    </View>
  );
});
