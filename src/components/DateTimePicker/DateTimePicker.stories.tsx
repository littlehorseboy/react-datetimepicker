import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, date, select } from '@storybook/addon-knobs';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import DateTimePicker from './DateTimePicker';
import markdownNotes from './DateTimePicker.md';

storiesOf('DateTimePicker', module)
  .addDecorator(withKnobs)
  .add('DateTimePicker (zh-TW)', withInfo()(() => (
    <>
      <DateTimePicker
        value={new Date(date('value', new Date()))}
        locale={select('locale', {
          'zh-TW': 'zh-TW',
          'en-US': 'en-US',
        }, 'zh-TW')}
      />
    </>
  )), {
    notes: { markdown: markdownNotes },
  });
