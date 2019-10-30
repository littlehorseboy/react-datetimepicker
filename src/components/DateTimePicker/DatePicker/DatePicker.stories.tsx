import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, date, select } from '@storybook/addon-knobs';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import DatePicker from './DatePicker';
import markdownNotes from './DatePicker.md';

storiesOf('DatePicker', module)
  .addDecorator(withKnobs)
  .add('DatePicker', withInfo()(() => (
    <>
      <DatePicker
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
