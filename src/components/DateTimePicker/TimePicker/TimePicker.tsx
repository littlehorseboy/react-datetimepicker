import React, { useState } from 'react';
import { format, setHours, setMinutes } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';

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

  const handleChangeSetHour = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(setHours(inputValue || new Date(), Number(event.target.value)));
  };

  const handleChangeSetMinute = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(setMinutes(inputValue || new Date(), Number(event.target.value)));
  };

  return (
    <>
      <input readOnly value={inputValue ? format(inputValue, 'HH:mm') : ''} />

      <div>
        <input
          type="number"
          min={0}
          max={23}
          value={inputValue ? format(inputValue, 'HH') : ''}
          onChange={handleChangeSetHour}
        />
        :
        <input
          type="number"
          min={0}
          max={59}
          value={inputValue ? format(inputValue, 'mm') : ''}
          onChange={handleChangeSetMinute}
        />
      </div>
    </>
  );
}
