import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import DatePicker from './DatePicker';

storiesOf('DatePicker', module)
  .add('DatePicker (zh-TW)', () => (
    <>
      <DatePicker value={new Date()} locale="zh-TW" />
    </>
  ))
  .add('DatePicker (en-US)', () => (
    <>
      <DatePicker value={new Date()} locale="en-US" />
    </>
  ));
