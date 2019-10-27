import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import TimePicker from './TimePicker';

storiesOf('TimePicker', module)
  .add('TimePicker', () => (
    <>
      <TimePicker value={new Date()} locale="zh-TW" />
    </>
  ));
