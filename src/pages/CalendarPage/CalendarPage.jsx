import Spinner from 'components/Spinner/Spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfWeek,
} from 'date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCurrentDate } from 'redux/auth/authSlice';
import { selectCurrentDate } from 'redux/auth/selectors';

const CalendarPage = () => {
  const dispatch = useDispatch();

  const [activePeriod, setActivePeriod] = useState('month');
  const [open, setOpen] = useState(false);

  const selectDate = useSelector(selectCurrentDate);
  const formattedDate = format(selectDate, 'MMMM yyyy');
  const formattedOneDay = format(selectDate, 'yyyy-MM-dd');

  let firstDayCurrentMonth = parse(formattedDate, 'MMMM yyyy', selectDate);
  let currentDay = parse(formattedOneDay, 'yyyy-MM-dd', selectDate);

  const handleClick = e => {
    const selectedDate = e.currentTarget.dataset.day;
    // console.log(selectedDate);
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
    <>
      <CalendarToolBar
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
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
