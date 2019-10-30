import React, { useState } from 'react';
import { format } from 'date-fns';
import Popover from '@material-ui/core/Popover';
import SelectHeader from '../SelectHeader/SelectHeader';
import DaysHeader from '../DaysHeader/DaysHeader';
import DaysView from '../DaysView/DaysView';

interface PropsI {
  value?: Date;
  locale?: string;
}

export default function DatePicker(props: PropsI): JSX.Element {
  const { value, locale = navigator.language } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState<undefined | Date>(value);
  const [viewValue, setViewValue] = useState(value || new Date());

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
        value={inputValue ? format(inputValue, 'yyyy/MM/dd') : ''}
        onClick={handleOpenPopover}
        data-testid="datepicker-input"
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
        </div>
      </Popover>
    </>
  );
}
