import React from 'react';
import { format, setDate } from 'date-fns';
/* eslint-disable import/no-extraneous-dependencies */
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/* eslint-enable */
import DatePicker from './DatePicker';

test('DatePicker render，不指定 value，input 內容為空', async () => {
  const { getByTestId } = render(<DatePicker />);

  const node = await waitForElement(() => getByTestId('datepicker-input'));

  expect(node).toBeEmpty();
});

test('DatePicker render，指定 value 的值為 new Date，input 內容為目前時間的 yyyy/MM/dd', async () => {
  const { getByTestId } = render(<DatePicker value={new Date()} />);

  const node = await waitForElement(() => getByTestId('datepicker-input'));

  expect(node).toHaveValue(format(new Date(), 'yyyy/MM/dd'));
});

test('點擊 input，彈出的年份選擇的年份與 value 相同', async () => {
  const { getByTestId } = render(<DatePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('datepicker-input'));

  fireEvent.click(input);

  const node = await waitForElement(() => getByTestId('selectheader-input'));

  expect(node).toHaveValue(Number(format(new Date(), 'yyyy')));
});

test('點擊 input，彈出的月份下拉選單的月份與 value 相同', async () => {
  const { getByTestId } = render(<DatePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('datepicker-input'));

  fireEvent.click(input);

  const node = await waitForElement(() => getByTestId('selectheadermonth-select'));

  expect(node).toHaveValue(new Date().getMonth().toString());
});

test('點擊切換下個月份的按鈕 2 次，下拉選單的月份會是現在的月份 + 2', async () => {
  const { getByTestId } = render(<DatePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('datepicker-input'));

  fireEvent.click(input);

  const btn = await waitForElement(() => getByTestId('selectheader-addmonth-btn'));

  fireEvent.click(btn);
  fireEvent.click(btn);

  const node = await waitForElement(() => getByTestId('selectheadermonth-select'));

  expect(node).toHaveValue((new Date().getMonth() + 2).toString());
});

test('點擊切換上個月份的按鈕 2 次，下拉選單的月份會是現在的月份 - 2', async () => {
  const { getByTestId } = render(<DatePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('datepicker-input'));

  fireEvent.click(input);

  const btn = await waitForElement(() => getByTestId('selectheader-submonth-btn'));

  fireEvent.click(btn);
  fireEvent.click(btn);

  const node = await waitForElement(() => getByTestId('selectheadermonth-select'));

  expect(node).toHaveValue((new Date().getMonth() - 2).toString());
});

test('點擊日期數字的第 3 個按鈕，檢查 value 的日期是否成功改變為 3', async () => {
  const { getByTestId, getAllByTestId } = render(<DatePicker value={new Date()} />);

  const input = await waitForElement(() => getByTestId('datepicker-input'));

  fireEvent.click(input);

  const btns = await waitForElement(() => getAllByTestId('daysview-btn'));

  fireEvent.click(btns[2]);

  expect(input).toHaveValue(format(setDate(new Date(), 3), 'yyyy/MM/dd'));
});
