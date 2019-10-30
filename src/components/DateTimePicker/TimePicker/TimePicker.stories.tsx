import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import TimePicker from './TimePicker';
import markdownNotes from './TimePicker.md';

storiesOf('TimePicker', module)
  .add('TimePicker', withInfo()(() => (
    <>
      <TimePicker value={new Date()} locale="zh-TW" />
    </>
  )), {
    notes: { markdown: markdownNotes },
  });
