import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import DateTimePicker from './DateTimePicker';

storiesOf('DateTimePicker', module)
  .add('DateTimePicker (zh-TW)', withInfo()(() => (
    <>
      <DateTimePicker value={new Date()} locale="zh-TW" />
    </>
  )))
  .add('DateTimePicker (en-US)', withInfo()(() => (
    <>
      <DateTimePicker value={new Date()} locale="en-US" />
    </>
  )));
