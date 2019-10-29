import React from 'react';
import { startOfYear, addMonths, setMonth } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  select: {
    width: '100%',
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

  const date = startOfYear(new Date());

  const monthNames = [...new Array(12)]
    .map((value, index): { label: string; value: number } => ({
      label: addMonths(date, index).toLocaleDateString(locale, { month: 'long' }),
      value: addMonths(date, index).getMonth(),
    }));

  const handleChangeMonth = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setViewValue(setMonth(viewValue, Number(event.target.value)));
  };

  return (
    <select
      className={classes.select}
      value={viewValue.getMonth()}
      onChange={handleChangeMonth}
      data-testid="selectheadermonth-select"
    >
      {monthNames.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
