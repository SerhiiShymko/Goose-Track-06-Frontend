import { format } from 'date-fns';
import {
  BtnTypeSelectDay,
  BtnTypeSelectMonth,
  PeriodTypeSelect,
} from './PeriodSelect.styled';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/auth/selectors';

export const PeriodSelect = ({ setPeriodType, activePeriod }) => {
  const choosedDate = useSelector(selectCurrentDate);

  const date = format(choosedDate, 'yyyy-MM-dd');
  const month = format(choosedDate, 'yyyy-MM');
  return (
    <PeriodTypeSelect>
      <BtnTypeSelectMonth
        to={`month/${month}`}
        $active={activePeriod === 'month'}
        onClick={() => {
          setPeriodType('month');
        }}
      >
        Month
      </BtnTypeSelectMonth>
      <BtnTypeSelectDay
        to={`day/${date}`}
        $active={activePeriod === 'day'}
        onClick={() => {
          setPeriodType('day');
        }}
      >
        Day
      </BtnTypeSelectDay>
    </PeriodTypeSelect>
  );
};
