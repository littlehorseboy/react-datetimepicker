import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, date } from '@storybook/addon-knobs';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import TimePicker from './TimePicker';
import markdownNotes from './TimePicker.md';

storiesOf('TimePicker', module)
  .addDecorator(withKnobs)
  .add('TimePicker', withInfo()(() => (
    <>
      <TimePicker
        value={new Date(date('value', new Date()))}
      />
    </>
  )), {
    notes: { markdown: markdownNotes },
  });
