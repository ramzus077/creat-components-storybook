import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { Button } from '../../../src/Button';
import Alert from '../../../src/Alerts';

const stories = storiesOf('Alerts', module);

stories.addDecorator(withKnobs);
stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>);

stories.add('Rate AppName', () => {
  const disabled = boolean('Disabled', false);
  const isBackButton = boolean('Is Back Button', false);
  const label = text('Label', 'Alert');

  const onPress = () =>
    Alert({
      title: 'Rate AppName',
      message:
        'If you enjoy using AppName, would you mind taking a moment to rate it? Thanks for your support!',
      buttons: [
        { text: 'Rate AppName', onPress: action('rate-appname') },
        {
          text: 'Remind Me Later',
          onPress: action('remind-me-later')
        },
        {
          text: 'No, Thanks',
          onPress: action('no-thanks')
        }
      ]
    });

  return (
    <Button
      disabled={disabled}
      isBackButton={isBackButton}
      label={label}
      onPress={onPress}
    />
  );
});

stories.add('Title', () => {
  const disabled = boolean('Disabled', false);
  const isBackButton = boolean('Is Back Button', false);
  const label = text('Label', 'Alert');
  const onPress = () =>
    Alert({
      title: 'Title',
      buttons: [{ text: 'OK', onPress: action('ok'), style: 'cancel' }]
    });
  return (
    <Button
      disabled={disabled}
      isBackButton={isBackButton}
      label={label}
      onPress={onPress}
    />
  );
});

stories.add('Send notification', () => {
  const disabled = boolean('Disabled', false);
  const isBackButton = boolean('Is Back Button', false);
  const label = text('Label', 'Alert');
  const onPress = () =>
    Alert({
      title: '“AppName” Would Like to Send You Notifications',
      message:
        'Notifications may include alerts, sounds and icon badges. These can be configured in Settings.',
      buttons: [
        { text: "Don't Allow", onPress: action('dont-allow') },
        { text: 'OK', onPress: action('ok') }
      ]
    });
  return (
    <Button
      disabled={disabled}
      isBackButton={isBackButton}
      label={label}
      onPress={onPress}
    />
  );
});
