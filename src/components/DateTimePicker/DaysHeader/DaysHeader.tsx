import React from 'react';
import { startOfWeek, addDays } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0.25),
    paddingBottom: theme.spacing(0.25),
  },
  dayLabel: {
    display: 'inline-block',
    width: 40,
    textAlign: 'center',
  },
}));

interface PropsI {
  locale: string;
}

export default function DaysHeader(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { locale } = props;

  const date = startOfWeek(new Date());

  const weekDayNames = [...new Array(7)]
    .map((value, index): string => addDays(date, index).toLocaleDateString(locale, { weekday: 'short' }));

  return (
    <div className={classes.root}>
      {weekDayNames.map((name): JSX.Element => (
        <div key={name} className={classes.dayLabel}>
          {locale === 'zh-TW'
            ? name.slice(1)
            : name}
        </div>
      ))}
    </div>
  );
}
