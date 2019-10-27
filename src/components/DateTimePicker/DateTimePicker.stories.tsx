import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import DateTimePicker from './DateTimePicker';

storiesOf('DateTimePicker', module)
  .add('DateTimePicker', () => (
    <>
      <DateTimePicker value={new Date()} />
    </>
  ));
