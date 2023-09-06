import { format } from 'date-fns';
import {
  BtnTypeSelectDay,
  BtnTypeSelectMonth,
  PeriodTypeSelect,
} from './PeriodSelect.styled';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/auth/selectors';
import { useState } from 'react';

export const PeriodSelect = () => {
  const [showMonth, setShowMonth] = useState(true);

  const choosedDate = useSelector(selectCurrentDate);

  const date = format(choosedDate, 'yyyy-MM-dd');
  const month = format(choosedDate, 'yyyy-MM');
  return (
    <PeriodTypeSelect>
      <BtnTypeSelectMonth
        to={`month/${month}`}
        $active={showMonth}
        onClick={() => setShowMonth(true)}
      >
        Month
      </BtnTypeSelectMonth>
      <BtnTypeSelectDay
        to={`day/${date}`}
        $active={!showMonth}
        onClick={() => setShowMonth(false)}
      >
        Day
      </BtnTypeSelectDay>
    </PeriodTypeSelect>
  );
};
