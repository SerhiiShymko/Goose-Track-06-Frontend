import { format } from 'date-fns';
import {
  BtnTypeSelectDay,
  BtnTypeSelectMonth,
  PeriodTypeSelect,
} from './PeriodSelect.styled';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from 'redux/auth/selectors';

export const PeriodSelect = ({ periodType, activePeriod }) => {
  // const [showMonth, setShowMonth] = useState();

  const choosedDate = useSelector(selectCurrentDate);

  const date = format(choosedDate, 'yyyy-MM-dd');
  const month = format(choosedDate, 'yyyy-MM');
  return (
    <PeriodTypeSelect>
      <BtnTypeSelectMonth
        to={`month/${month}`}
        $active={activePeriod === 'month'}
        onClick={() => {
          // setShowMonth(true);
          periodType('month');
        }}
      >
        Month
      </BtnTypeSelectMonth>
      <BtnTypeSelectDay
        to={`day/${date}`}
        $active={activePeriod === 'day'}
        onClick={() => {
          // setShowMonth(false);
          periodType('day');
        }}
      >
        Day
      </BtnTypeSelectDay>
    </PeriodTypeSelect>
  );
};
