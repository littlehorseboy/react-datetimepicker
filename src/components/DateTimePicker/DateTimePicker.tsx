import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DaysHeader from './DaysHeader/DaysHeader';
import DaysView from './DaysView/DaysView';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: 100,
  },
});

interface PropsI {
  value?: Date;
}

export default function DateTimePicker(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { value: date = new Date() } = props;

  return (
    <>
      <DaysHeader locale="zh-TW" />
    </>
  );
}
