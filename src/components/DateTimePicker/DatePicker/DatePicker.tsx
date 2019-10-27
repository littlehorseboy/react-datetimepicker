import React, { useState } from 'react';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import SelectHeader from '../SelectHeader/SelectHeader';
import DaysHeader from '../DaysHeader/DaysHeader';
import DaysView from '../DaysView/DaysView';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: 100,
  },
});

interface PropsI {
  value?: Date;
  locale?: string;
}

export default function DatePicker(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { value, locale = navigator.language } = props;

  const [inputValue, setInputValue] = useState<undefined | Date>(value);
  const [viewValue, setViewValue] = useState(value || new Date());

  return (
    <>
      <input readOnly value={inputValue ? format(inputValue, 'yyyy/MM/dd') : ''} />

      <SelectHeader
        viewValue={viewValue}
        setViewValue={setViewValue}
        locale={locale}
      />
      <DaysHeader locale={locale} />
      <DaysView
        viewValue={viewValue}
        setInputValue={setInputValue}
      />
    </>
  );
}
