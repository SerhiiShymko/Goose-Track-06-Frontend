import {
  MonthCalendarHead,
  DayHolidays,
  DateCalendarMonth,
  DateActive,
  DateNoSelected,
  CalendarTable,
  Day,
  EmptyDateBlock,
  CalendarTableShortMonth,
} from './ChoosedMonth.styled';
import { nanoid } from 'nanoid';
import {
  format,
  startOfWeek,
  addDays,
  parse,
  // parseISO,
  // isValid,
  // add,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  add,
} from 'date-fns';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTasks } from 'redux/tasks/operations';
// import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/operations';
// import { selectTasks } from 'redux/tasks/selectors';
import { selectCurrentDate } from 'redux/auth/selectors';

const ChoosedMonth = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  // const tasks = useSelector(selectTasks);
  const selectDate = useSelector(selectCurrentDate);

  const formattedDate = format(selectDate, 'MMMM yyyy');
  let firstDayCurrentMonth = parse(formattedDate, 'MMMM yyyy', new Date());

  const result = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });


  // const dateFormat = format(selectDate, 'yyyy-MM');

  const lastMonth = format(
    add(firstDayCurrentMonth, { months: -1 }),
    'yyyy-MM'
  );

  useEffect(() => {
    dispatch(fetchTasks(lastMonth));
  }, [dispatch, lastMonth]);

  const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];

  const renderDayOfWeek = () => {
    for (let day = 0; day < 7; day++) {
      if (window.screen.width < 768) {
        weekDays.push(format(addDays(startDayOfWeek, day), 'EEEEE'));
      } else {
        weekDays.push(format(addDays(startDayOfWeek, day), 'EEE'));
      }
    }
    return weekDays;
  };

  const resultDate = result.map(day => {
    if (format(day, 'MMMM yyyy') !== formattedDate) {
      return <EmptyDateBlock key={day.toString()}></EmptyDateBlock>;
    } else if (format(day, 'd MMMM') === format(new Date(), 'd MMMM')) {
      return (
        <DateCalendarMonth
          data-day={format(day, 'yyyy-MM-dd')}
          key={day.toString()}
          to={`/calendar/day/${format(day, 'yyyy-MM-dd')}`}
        >
          <DateActive>{format(day, 'd')}</DateActive>
        </DateCalendarMonth>
      );
    } else {
      return (
        <DateCalendarMonth
          data-day={format(day, 'yyyy-MM-dd')}
          key={day.toString()}
          to={`/calendar/day/${format(day, 'yyyy-MM-dd')}`}
        >
          <DateNoSelected>{format(day, 'd')}</DateNoSelected>
        </DateCalendarMonth>
      );
    }
  });

  // const taskResult = tasks.map(task => {
  //   return <div key={task._id}>{task}</div>;
  // });

  return (
    <>
      <MonthCalendarHead>
        {renderDayOfWeek().map(day => {
          if (day === 'Sat' || day === 'Sun') {
            return <DayHolidays key={nanoid()}>{day}</DayHolidays>;
          }
          return <Day key={nanoid()}>{day}</Day>;
        })}
      </MonthCalendarHead>
      {result.length > 35 ? (
        <CalendarTable>{resultDate}</CalendarTable>
      ) : (
        <CalendarTableShortMonth>{resultDate}</CalendarTableShortMonth>
      )}
    </>
  );
};

export default ChoosedMonth;
