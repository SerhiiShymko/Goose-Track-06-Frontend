import { WrapperPaginator } from 'components/CalendarToolBar/WrapperPaginator/WrapperPaginator';
import Statistics from 'components/Statistics/statistics';
import { StatisticWrapper } from 'components/Statistics/statistics.styled';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfWeek,
} from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { Wrapper } from 'components/Statistics/statistics.styled';
import { useSelector } from 'react-redux';
import { setCurrentDate } from 'redux/auth/authSlice';
import { selectCurrentDate } from 'redux/auth/selectors';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const selectDate = useSelector(selectCurrentDate);

  const currentDate = format(new Date(selectDate), 'yyyy-MM-dd');
  const dataMonth = format(selectDate, 'yyyy-MM');

  useEffect(() => {
    dispatch(fetchTasks(dataMonth));
  }, [dispatch, dataMonth]);

  const [activePeriod, setActivePeriod] = useState('month');
  const [open, setOpen] = useState(false);

  const formattedDate = format(selectDate, 'MMMM yyyy');
  const formattedOneDay = format(selectDate, 'yyyy-MM-dd');

  let firstDayCurrentMonth = parse(formattedDate, 'MMMM yyyy', new Date());
  let currentDay = parse(formattedOneDay, 'yyyy-MM-dd', new Date());

  const handleClick = ({ currentTarget }) => {
    const selectedDate = currentTarget.dataset.day;

    const parsedDateArray = selectedDate.split('-');
    const choosedDay = new Date(
      parsedDateArray[0],
      parsedDateArray[1] - 1,
      parsedDateArray[2]
    );
    const dayTimeStamp = choosedDay.getTime();
    dispatch(setCurrentDate(dayTimeStamp));
    setOpen(false);
  };

  const nextDate = () => {
    if (activePeriod === 'day') {
      const nextDay = add(currentDay, { days: 1 });
      const dayTimeStamp = nextDay.getTime();
      dispatch(setCurrentDate(dayTimeStamp));
      // setActivePeriod('day');
    } else {
      let currentDayNextMonth = add(currentDay, { months: 1 });
      const dateTimeStamp = currentDayNextMonth.getTime();
      dispatch(setCurrentDate(dateTimeStamp));
      // setActivePeriod('month');
    }
  };

  const prevDate = () => {
    if (activePeriod === 'day') {
      const prevDay = add(currentDay, { days: -1 });
      const dayTimeStamp = prevDay.getTime();
      dispatch(setCurrentDate(dayTimeStamp));
      // setActivePeriod('day');
    } else {
      let currentDayPrevMonth = add(currentDay, { months: -1 });
      const dateTimeStamp = currentDayPrevMonth.getTime();
      dispatch(setCurrentDate(dateTimeStamp));
      // setActivePeriod('month');
    }
  };

  const result = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  return (
    <StatisticWrapper>
      <Wrapper>
        <WrapperPaginator
          dayInterval={result}
          onNext={nextDate}
          onPrev={prevDate}
          dateToday={formattedDate}
          onClickDate={handleClick}
          setPeriodType={setActivePeriod}
          activePeriod={activePeriod}
          setOpen={setOpen}
          open={open}
        />
      </Wrapper>
      <Statistics currentDate={currentDate} />
    </StatisticWrapper>
  );
};

export default StatisticsPage;
