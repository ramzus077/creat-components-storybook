import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, number } from '@storybook/addon-knobs';

import ProgressBar from '../../../src/ProgressBar';
import CenterView from '../CenterView';
const stories = storiesOf('ProgressBar', module);

stories.addDecorator(withKnobs);
stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>);

stories.add('ProgressBar', () => {
  const progress = number('Progress', 0);

  return <ProgressBar progress={progress} />;
});
