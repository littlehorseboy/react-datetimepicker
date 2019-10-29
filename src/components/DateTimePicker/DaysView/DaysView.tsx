import React from 'react';
import { endOfMonth } from 'date-fns';
import chunk from 'lodash/chunk';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  week: {
    display: 'flex',
  },
  day: {
    display: 'inline-block',
    width: 40,
    height: 40,
  },
});

interface PropsI {
  viewValue: Date;
  setInputValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function DaysView(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { viewValue, setInputValue } = props;

  const endOfMonthDay = endOfMonth(viewValue).getDate();

  const monthDays = [...new Array(endOfMonthDay)]
    .map((value, index): Date => new Date(
      viewValue.getFullYear(), viewValue.getMonth(), index + 1,
      viewValue.getHours(), viewValue.getMinutes(),
    ));

  const monthDaysFillUpForWeek = ([...new Array(monthDays[0].getDay())] as (null | Date)[])
    .concat(monthDays);

  const monthDayChunks = chunk(monthDaysFillUpForWeek, 7);

  const handleClick = (internalDate: Date): void => {
    setInputValue(internalDate);
  };

  return (
    <>
      {monthDayChunks.map((monthDayChunk): JSX.Element => (
        <div key={Math.random()} className={classes.week}>
          {monthDayChunk.map((day) => {
            if (day) {
              return (
                <button
                  key={day.getDate()}
                  type="button"
                  className={classes.day}
                  onClick={(): void => handleClick(day)}
                >
                  {day.getDate()}
                </button>
              );
            }

            return (
              <div key={Math.random()} className={classes.day} />
            );
          })}
        </div>
      ))}
    </>
  );
}
