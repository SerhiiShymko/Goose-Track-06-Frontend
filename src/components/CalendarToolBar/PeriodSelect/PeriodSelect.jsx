import { format } from 'date-fns';
import {
  BtnTypeSelectDay,
  BtnTypeSelectMonth,
  PeriodTypeSelect,
} from './PeriodSelect.styled';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/auth/selectors';
import { useState } from 'react';

export const PeriodSelect = ({ periodType }) => {
  const [showMonth, setShowMonth] = useState();

  const choosedDate = useSelector(selectCurrentDate);

  const date = format(choosedDate, 'yyyy-MM-dd');
  const month = format(choosedDate, 'yyyy-MM');
  return (
    <PeriodTypeSelect>
      <BtnTypeSelectMonth
        to={`month/${month}`}
        $active={showMonth}
        onClick={() => {
          setShowMonth(true);
          periodType('month');
        }}
      >
        Month
      </BtnTypeSelectMonth>
      <BtnTypeSelectDay
        to={`day/${date}`}
        $active={!showMonth}
        onClick={() => {
          setShowMonth(false);
          periodType('day');
        }}
      >
        Day
      </BtnTypeSelectDay>
    </PeriodTypeSelect>
  );
};
