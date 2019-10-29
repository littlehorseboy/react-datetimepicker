import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import DatePicker from './DatePicker';

storiesOf('DatePicker', module)
  .add('DatePicker (zh-TW)', withInfo()(() => (
    <>
      <DatePicker value={new Date()} locale="zh-TW" />
    </>
  )))
  .add('DatePicker (en-US)', withInfo()(() => (
    <>
      <DatePicker value={new Date()} locale="en-US" />
    </>
  )));
