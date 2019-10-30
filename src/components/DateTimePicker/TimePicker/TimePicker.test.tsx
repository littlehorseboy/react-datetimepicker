import React from 'react';
import { format, setHours, setMinutes } from 'date-fns';
/* eslint-disable import/no-extraneous-dependencies */
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/* eslint-enable */
import TimePicker from './TimePicker';

test('TimePicker render，不指定 value，input 內容為空', async () => {
  const { getByTestId } = render(<TimePicker />);

  const node = await waitForElement(() => getByTestId('timepicker-input'));

  expect(node).toBeEmpty();
});

test('TimePicker render，指定 value 的值為 new Date，input 內容為目前時間的 HH:mm', async () => {
  const { getByTestId } = render(<TimePicker value={new Date()} />);

  const node = await waitForElement(() => getByTestId('timepicker-input'));

  expect(node).toHaveValue(format(new Date(), 'HH:mm'));
});

test('時間的小時 input 的值改動後，value 也會跟著變動', async () => {
  const { getByTestId } = render(<TimePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('timepicker-input'));

  fireEvent.click(input);

  const hourInput = await waitForElement(() => getByTestId('timepicker-hourinput'));

  fireEvent.change(hourInput, { target: { value: 20 } });

  expect(input).toHaveValue(format(setHours(new Date(), 20), 'HH:mm'));
});

test('時間的分鐘 input 的值改動後，value 也會跟著變動', async () => {
  const { getByTestId } = render(<TimePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('timepicker-input'));

  fireEvent.click(input);

  const minuteInput = await waitForElement(() => getByTestId('timepicker-minuteinput'));

  fireEvent.change(minuteInput, { target: { value: 55 } });

  expect(input).toHaveValue(format(setMinutes(new Date(), 55), 'HH:mm'));
});
