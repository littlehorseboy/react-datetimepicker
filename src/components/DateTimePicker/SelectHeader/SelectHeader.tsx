import React from 'react';
import { addMonths, subMonths, setYear } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SelectHeaderMonth from './SelectHeaderMonth/SelectHeaderMonth';

const useStyles = makeStyles({
  dayLabel: {
    display: 'inline-block',
    width: 100,
  },
});

interface PropsI {
  viewValue: Date;
  setViewValue: React.Dispatch<React.SetStateAction<Date>>;
  locale: string;
}

export default function SelectHeader(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { viewValue, setViewValue, locale } = props;

  const handleClickSubMonths = (): void => {
    setViewValue(subMonths(viewValue, 1));
  };

  const handleClickAddMonths = (): void => {
    setViewValue(addMonths(viewValue, 1));
  };

  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setViewValue(setYear(viewValue, Number(event.target.value)));
  };

  return (
    <div>
      <button type="button" onClick={handleClickSubMonths}>
        <ArrowLeftIcon />
      </button>

      <input type="number" value={viewValue.getFullYear()} onChange={handleChangeYear} />

      <SelectHeaderMonth
        viewValue={viewValue}
        setViewValue={setViewValue}
        locale={locale}
      />

      <button type="button" onClick={handleClickAddMonths}>
        <ArrowRightIcon />
      </button>
    </div>
  );
}
