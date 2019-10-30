import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import DateTimePicker from './DateTimePicker';
import markdownNotes from './DateTimePicker.md';

storiesOf('DateTimePicker', module)
  .add('DateTimePicker (zh-TW)', withInfo()(() => (
    <>
      <DateTimePicker value={new Date()} locale="zh-TW" />
    </>
  )), {
    notes: { markdown: markdownNotes },
  })
  .add('DateTimePicker (en-US)', withInfo()(() => (
    <>
      <DateTimePicker value={new Date()} locale="en-US" />
    </>
  )), {
    notes: { markdown: markdownNotes },
  });
