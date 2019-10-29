import React, { useState } from 'react';
import { format, setHours, setMinutes } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import SelectHeader from './SelectHeader/SelectHeader';
import DaysHeader from './DaysHeader/DaysHeader';
import DaysView from './DaysView/DaysView';

const useStyles = makeStyles((theme) => ({
  timeContainer: {
    display: 'flex',
    '& > span': {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 'bold',
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    '& > input': {
      height: 20,
      width: '100%',
    },
  },
}));

interface PropsI {
  value?: Date;
  locale?: string;
}

export default function DatePicker(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { value, locale = navigator.language } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState<undefined | Date>(value);
  const [viewValue, setViewValue] = useState(value || new Date());

  const handleChangeSetHour = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(setHours(inputValue || new Date(), Number(event.target.value)));
    setViewValue(setHours(viewValue || new Date(), Number(event.target.value)));
  };

  const handleChangeSetMinute = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(setMinutes(inputValue || new Date(), Number(event.target.value)));
    setViewValue(setMinutes(viewValue || new Date(), Number(event.target.value)));
  };

  const handleOpenPopover = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <input
        readOnly
        value={inputValue ? format(inputValue, 'yyyy/MM/dd HH:mm') : ''}
        onClick={handleOpenPopover}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>
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

          <hr />

          <div className={classes.timeContainer}>
            <input
              type="number"
              min={0}
              max={23}
              value={inputValue ? format(inputValue, 'HH') : ''}
              onChange={handleChangeSetHour}
            />

            <span>:</span>

            <input
              type="number"
              min={0}
              max={59}
              value={inputValue ? format(inputValue, 'mm') : ''}
              onChange={handleChangeSetMinute}
            />
          </div>
        </div>
      </Popover>
    </>
  );
}
